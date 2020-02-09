const db = require('../database')

const getAllUser = async (req, res, next) => {
    try {
        const [rows] = await db.query('SELECT * FROM user')
        res.json({
            "success": true,
            "data": rows
        })
    } catch (err) {
        next()
    }
}

const registerUser = (req, res, next) => {
    const nama = req.body.name
    db.query('INSERT INTO user(name) values(?)', [nama])
        .then(() => {
            res.json({
                "success": true,
                "message": "registered succes"
            })
        }).catch((err) => {
            next(err)
        })
}

const getUserById = async (req, res, next) => {
    const id = req.params.id
    const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [id])
    if (rows.length > 0) {
        res.json({
            "success": true,
            "user": rows[0]
        })
    } else {
        res.status(404)
        const error = new Error("User Not Found")
        next(error)
    }
}

const updateUserName = (req, res, next) => {
    const id = req.params.id
    const newName = req.body.name
    db.query('UPDATE user SET name = ? WHERE id = ?', [newName, id])
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
    db.query('DELETE FROM user WHERE id = ?', [id])
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

const userController = {
    getAllUser,
    registerUser,
    getUserById,
    updateUserName,
    deleteUserById
}

module.exports = userController