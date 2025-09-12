const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.PASSWORD,
    database:process.env.DB_NAME
});

db.connect((err)=>{
    if(err) console.log("Database connection failed",err);
    else console.log("Database Connected");
});

module.exports = db;