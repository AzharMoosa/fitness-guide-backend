const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Welcome To The Fitness Application API"));
