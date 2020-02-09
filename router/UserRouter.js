const router = require('express').Router()
const userController = require('../controller/UserController')


/* ---------
    USER
----------*/
// GET SEMUA USER
router.get('/', userController.getAllUser)

// GET USER BY ID
router.get('/:id', userController.getUserById)


// EDIT USER
router.put('/:id', userController.updateUserName)

// HAPUS USER
router.delete('/:id', userController.deleteUserById)

// DAFTAR USER
router.post('/register', userController.registerUser)

// Login User
router.post('/login', userController.loginUser)


module.exports = router