const router = require('express').Router()
const userController = require('../controller/UserController')

const user = ["user1", "user2", "user3"]

// router.get('/', (req, res) => {
//     if (user.length > 0) {
//         res.status(200)
//         res.json({
//             "success": true,
//             "user": user
//         })
//     } else {
//         res.status(404)
//         res.json({
//             "success": false,
//             "message": "user not found"
//         })
//     }
// })

// // SELECT BY ID
// router.get('/:id', (req, res) => {
//     const index = req.params.id
//     res.json({
//         "success": true,
//         "user": user[index]
//     }).status(200)
// })


// // POST
// router.post('/', (req, res) => {
//     const userBaru = req.body.user
//     user.push(userBaru)
//     res.json({
//         "success": true
//     })
// })


// // UPDATE
// router.put('/:id', (req, res) => {
//     const index = req.params.id
//     const dataBaru = req.body.user
//     user[index] = dataBaru
//     res.json({
//         "success": true
//     })
// })

// router.delete('/:id', (req, res) => {
//     const index = req.params.id
//     user.slice(id, 1)
// })

// GET SEMUA USER
router.get('/', userController.getAllUser)

// GET USER BY ID
router.get('/:id', userController.getUserById)

// DAFTAR USER
router.post('/', userController.registerUser)

// EDIT USER
router.put('/:id', userController.updateUserName)

// HAPUS USER
router.delete('/:id', userController.deleteUserById)


module.exports = router