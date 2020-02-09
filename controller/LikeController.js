const db = require('../database')

module.exports = {
    // GET /   get all Like
    getAllLike: async (req, res, next) => {
        try {
            const [rows] = await db.query('SELECT * FROM likes')
            res.json({
                "success": true,
                "data": rows
            })
        } catch (err) {
            next()
        }
    },
    // POST /  like a post 
    postLike: async (req, res, next) => {
        const idPost = req.body.id_post
        const idUser = req.body.id_user
        db.query('INSERT INTO likes(id_post, id_user) values(?, ?)', [idPost, idUser])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "Like success"
                })
            }).catch((err) => {
                next(err)
                res.json({
                    "success": false,
                    "message": err
                })
            })
    },
    // DELETE / dislike a post
    deleteLike: async (req, res, next) => {
        const idPost = req.params.id_post
        db.query('DELETE FROM likes WHERE id_post = ?', [idPost])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "Dislike successfully"
                })
            }).catch((err) => {
                res.json({
                    "success": false,
                    "message": err
                })
            })
    }
}


// const likeController = {

// }

// module.exports = likeController