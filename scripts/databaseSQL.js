const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),      
  user: process.env.DB_USER,              
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  ssl: {
    ca: fs.readFileSync(
      path.join(__dirname, "aiven-ca.pem")
    ),
    rejectUnauthorized: true
  }
});

connection.connect((err) => {
  if (err) {
    console.error("❌ MySQL SSL connection failed:", err.message);
    return;
  }
  console.log("✅ Connected to MySQL with SSL");
});

module.exports = { connection };
