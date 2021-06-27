const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));

// Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/routines", require("./routes/routines"));
app.use("/api/exercises", require("./routes/exercises"));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Welcome To The Fitness Application API"));
