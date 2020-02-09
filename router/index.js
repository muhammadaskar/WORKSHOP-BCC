const router = require('express').Router()
const userRouter = require('./UserRouter')
const postRouter = require('./PostRouter')
const likeRouter = require('./LikeRouter')

router.get('/', (req, res) => {
    res.send('BCC In Glory')
})

router.use('/user', userRouter)
router.use('/post', postRouter)
router.use('/like', likeRouter)
module.exports = router