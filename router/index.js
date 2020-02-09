const router = require('express').Router()
const userRouter = require('./UserRouter')

router.get('/', (req, res) => {
    res.send('BCC In Glory')
})

router.use('/user', userRouter)
// router.use(notFound);
// router.use(errorHandler)

// function notFound(req, res, next) {
//     res.status(404)
//     const err = new Error("Page Not Found")
//     next(err)
// }

// function errorHandler(err, req, res, next) {
//     res.status(res.status || 500)
//     const message = err.message || "Internal Server Error"
//     res.json({
//         "message": message
//     })
// }

module.exports = router