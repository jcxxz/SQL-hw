const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Weld1234.',
    database: 'tracker',
})

module.exports = db;