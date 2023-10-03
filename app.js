const express = require("express");
const helmet = require('helmet');

const app = express();

const mongoose = require("./database/database");

require('dotenv').config();

const shameRoutes = require("./routes/shame");

const path = require("path");

app.use(express.json());

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/api/shames", shameRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

app.use(helmet());

module.exports = app;