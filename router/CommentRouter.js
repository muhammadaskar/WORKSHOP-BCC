const router = require('express').Router()
const commentRouter = require('../controller/CommentController')

// GET /:id    get comment for a post by id_post
router.get('/:id', commentRouter.getCommentById)

// POST : post comment
router.post('/', commentRouter.postComment)

// PUT /:id    update comment by id
router.put('/:id', commentRouter.updateComment)

// DELETE /:id delete comment by id
router.delete('/:id', commentRouter.deleteComment)

module.exports = router