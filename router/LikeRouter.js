const router = require('express').Router()
const likeController = require('../controller/LikeController')
// const userController = require('../controller')

// GET /   get all Like
router.get('/', likeController.getAllLike)

// POST /  like a post 
router.post('/', likeController.postLike)

// DELETE / dislike a post
router.delete('/')

module.exports = router