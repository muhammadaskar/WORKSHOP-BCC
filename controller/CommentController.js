const db = require('../database')

module.exports = {

    // GET /:id    get comment for a post by id_post
    getCommentById: async (req, res, next) => {
        const id_post = req.params.id
        const [rows] = await db.query('SELECT id, id_user, content FROM comments WHERE id = ?', [id_post])
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
    },

    // POST : post comment
    postComment: async (req, res, next) => {
        const idUser = req.body.id_user
        const idPost = req.body.id_post
        const content = req.body.content
        db.query('INSERT INTO comments(id_user, id_post, content) VALUES (?, ?, ?)', [idUser, idPost, content])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "comment posted"
                })
            }).catch((err) => {
                res.json({
                    "success": false,
                    "message": err
                })
            })
    },

    // PUT /:id    update comment by id
    updateComment: async (req, res, next) => {
        const id = req.params.id
        const content = req.body.content
        db.query('UPDATE comments SET content = ? WHERE id = ?', [content, id])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "Updated successfuly"
                })
            }).catch((err) => {
                res.json({
                    "success": false,
                    "message": err
                })
            })
    },

    // DELETE /:id delete comment by id
    deleteComment: async (req, res, next) => {
        const id = req.params.id
        db.query('DELETE FROM comments WHERE id = ?', [id])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "Deleted comment successfully"
                })
            }).catch((err) => {
                res.json({
                    "success": false,
                    "message": err
                })
            })
    }

}