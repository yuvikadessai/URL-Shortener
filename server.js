const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const db = require("./config/db")
const urlRoutes = require("./routes/urlRoutes");
const cors = require("cors");



dotenv.config();
const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],        // allowed methods
    credentials: true
}));
// Middleware to parse incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", urlRoutes);

const PORT = 8000;
app.listen(PORT, (req, res)=>{
   
    console.log(`Server is running on PORT ${PORT}`) ;
});