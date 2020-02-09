const router = require('express').Router()
const postController = require('../controller/PostController')

/* ---------
    POST
----------*/

// GET ALL
router.get('/', postController.getAllPost)

// GET BY ID
router.get('/:id', postController.getUserById)

// POST BY ID
router.post('/', postController.postUser)

// EDIT BY ID
router.put('/:id', postController.updatePost)

// HAPUS BY ID
router.delete('/:id', postController.deletePost)


module.exports = router