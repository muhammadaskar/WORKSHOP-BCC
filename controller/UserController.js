require('dotenv').config()
const db = require('../database')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY

const getAllUser = async (req, res, next) => {
    try {
        const [rows] = await db.query('SELECT * FROM users')
        res.json({
            "success": true,
            "data": rows
        })
    } catch (err) {
        next()
    }
}

const registerUser = async (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const isEmail = validator.isEmail(email)
    if (isEmail) {
        const [rows] = await db.query('select * from users where email = ? limit 1',
            [email])
        if (rows.length == 0) {
            const password = req.body.password
            const hashedPassword = await bcrypt.hash(password, 11)
            db.query('insert into users(name, email, password) values(?,?,?)',
                    [name, email, hashedPassword])
                .then(() => {
                    res.json({
                        "success": true,
                        "message": "Register success!"
                    })
                })
                .catch((err) => {
                    res.status(500)
                    res.json({
                        "success": false,
                        "error": err
                    })
                })
        } else {
            res.status(409)
            const error = new Error("Email already registered")
            next(error)
        }
    } else {
        res.status(409)
        const error = new Error("Your email is incorrect")
        next(error)
    }
}

const getUserById = async (req, res, next) => {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id])
    if (rows.length > 0) {
        res.json({
            "success": true,
            "user": rows[0]
        })
    } else {
        res.status(404)
        res.json({
            "success": false,
            "message": "User not found"
        })
    }
}

const updateUserName = (req, res, next) => {
    const id = req.params.id
    const newName = req.body.name
    db.query('UPDATE users SET name = ? WHERE id = ?', [newName, id])
        .then(() => {
            res.json({
                "success": true,
                "message": "change name success"
            })
        }).catch(() => {
            res.status(404)
            const error = new Error("User Not Found")
            next(error)
        })
}

const deleteUserById = (req, res, next) => {
    const id = req.params.id
    db.query('DELETE FROM users WHERE id = ?', [id])
        .then(() => {
            res.json({
                "success": true,
                "message": "delete successfully"
            })
        }).catch(() => {
            res.status(404)
            const error = new Error("User Not Found")
            next(error)
        })
}

const loginUser = async (req, res, next) => {
    console.log(res)
    const email = req.body.email
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email])
    if (rows.length != 0) {
        const user = rows[0]
        const password = req.body.password
        bcrypt.compare(password, user.password)
            .then(async () => {
                const payload = {
                    "id_user": user.id,
                    "email": user.email
                }
                const token = await jwt.sign(payload, JWT_KEY)
                if (token) {
                    res.json({
                        "success": true,
                        "token": token
                    })
                } else {
                    const err = new Error("JWT Error, cant create token")
                    next(err)
                }
            }).catch(() => {
                const err = new Error("Wrong Password")
                next(err)
            })
    } else {
        const err = new Error("U Seems not registered yet")
        next(err)
    }
}

const userController = {
    getAllUser,
    registerUser,
    getUserById,
    updateUserName,
    deleteUserById,
    loginUser
}

module.exports = userController