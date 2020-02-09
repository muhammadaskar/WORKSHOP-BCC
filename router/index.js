const router = require('express').Router()
const userRouter = require('./UserRouter')
const postRouter = require('./PostRouter')
const likeRouter = require('./LikeRouter')
const commentRouter = require('./CommentRouter')

router.get('/', (req, res) => {
    res.send('BCC In Glory')
})

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/like', likeRouter)
router.use('/comment', commentRouter)
module.exports = router