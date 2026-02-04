require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.SQLHOST,
    user: process.env.SQLUSER,
    database: process.env.SQLDATABASE,
    password: process.env.SQLPASSWORD,
    port: process.env.SQLPORT,
    multipleStatements: true,
});

connection.connect((err) =>{
    if (err) throw err;
    console.log("✅ Connected to MySQL Database!");
})

module.exports = {connection};