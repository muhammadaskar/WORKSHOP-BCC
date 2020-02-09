const express = require('express')
const app = express()
require('./database')

const port = 69
const router = require('./router')

app.listen(port, () => {
    console.log("Listen to", port)
})

app.use(express.json())
app.use('/', router)

// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

// app.get('/bcc', (req, res, next) => {
//     res.send('Halaman BCC')
// })

// app.get('/', (req, res) => {
//     res.json({
//         "success": true,
//         "message": "Hello World"
//     })
// })

// app.get('/user', (req, res) => {
//     if (user.length > 0) {
//         res.status(200)
//         res.json({
//             "success": true,
//             "user": user
//         })
//     }
// })

// // SELECT BY ID
// app.get('/user/:id', (req, res) => {
//     const index = req.params.id
//     res.json({
//         "success": true,
//         "user": user[index]
//     }).status(200)
// })


// // POST
// app.post('/user', (req, res) => {
//     const userBaru = req.body.user
//     user.push(userBaru)
//     res.json({
//         "success": true
//     })
// })


// // UPDATE
// app.put('/user/:id', (req, res) => {
//     const index = req.params.id
//     const dataBaru = req.body.user
//     user[index] = dataBaru
//     res.json({
//         "success": true
//     })
// })