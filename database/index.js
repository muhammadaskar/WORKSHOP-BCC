const mysql = require('mysql2/promise')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'workshop_bcc'
})

db.query('SELECT 1 + 1 as result', (err, results) => {
    if (err) console.log(err)
    // else console.log("connected to database")
})

module.exports = db