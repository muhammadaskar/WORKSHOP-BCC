const db = require('../database')


module.exports = {
    getAllLike: async (req, res, next) => {
        try {
            const [rows] = await db.query('SELECT * FROM like')
            res.json({
                "success": true,
                "data": rows
            })
        } catch (err) {
            next()
        }
    },
    postLike: async (req, res, next) => {
        const idUser = req.params.id
        const idPost = req.params.id_post
        db.query('INSERT INTO like(id_user) values(?) (id_post) values(?)', [idUser, idPost])
            .then(() => {
                res.json({
                    "success": true,
                    "message": "Like succes"
                })
            }).catch((err) => {
                next(err)
            })
    }
}


// const likeController = {

// }

// module.exports = likeController