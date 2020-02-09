// const db = require('../database')

// const getUserById = async (req, res, next) => {
//     const id = req.params.id
//     const [rows] = await db.query('SELECT * FROM post WHERE id = ?', [id])
//     if (rows.length > 0) {
//         res.json({
//             "success": true,
//             "user": rows[0]
//         })
//     } else {
//         res.status(404)
//         const error = new Error("User Not Found")
//         next(error)
//     }
// }

// const postUser = (req, res, next) => {
//     const content = req.body.content
//     const idUser = req.body.id_user
//     const id = req.body.id
//     db.query('INSERT INTO post(content) values(?) WHERE id = ?', [content, idUser])
//         .then(() => {
//             res.json({
//                 "success": true,
//                 "message": "upload succes"
//             })
//         }).catch((err) => {
//             next(err)
//         })
// }

// const postController = {
//     getUserById,
//     postUser
// }

// module.exports = postController