const db = require('../database')


// GET SEMUA POST
const getAllPost = async (req, res, next) => {
    const [rows] = await db.query('SELECT id, id_user, content FROM posts')
    if (rows.length != 0) {
        res.json({
            "success": true,
            "data": rows
        })
    } else {
        res.json({
            "success": false,
            "message": "user not found"
        })
    }
}


// GET POST BY ID
const getUserById = async (req, res, next) => {
    const id_post = req.params.id
    const [rows] = await db.query('SELECT id, id_user, content FROM posts WHERE id = ?', [id_post])
    if (rows.length != 0) {
        res.json({
            "success": true,
            "user": rows[0]
        })
    } else {
        res.status(404)
        res.json({
            "success": false,
            "message": "User not found"
        })

    }
}

// 
const postUser = async (req, res, next) => {
    const id_User = req.body.id_user
    const content = req.body.content
    db.query('INSERT INTO posts(id_user, content) values(?, ?)', [id_User, content])
        .then(() => {
            res.json({
                "success": true,
                "message": "upload succes"
            })
        }).catch((err) => {
            res.json({
                "success": false,
                "error": err
            })
            next(err)
        })
}

const updatePost = (req, res, next) => {
    const id_post = req.params.id
    const content = req.body.content
    db.query('UPDATE posts SET content = ? WHERE id = ?', [content, id_post])
        .then(() => {
            res.json({
                "success": true,
                "message": "post updated"
            })
        }).catch((error) => {
            res.json({
                "success": false,
                "error": error
            })
        })
}

const deletePost = (req, res, next) => {
    const id = req.params.id
    db.query('DELETE FROM posts WHERE id = ?', [id])
        .then(() => {
            res.json({
                "success": true,
                "message": "post deleted"
            })
        }).catch((err) => {
            res.json({
                "success": false,
                "message": "Failed"
            })
        })
}

const postController = {
    getAllPost,
    getUserById,
    postUser,
    updatePost,
    deletePost
}

module.exports = postController