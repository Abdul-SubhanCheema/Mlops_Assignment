// server.js
const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
// Load environment variables
dotenv.config();

// Connect to database
connectDB();


const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true
  }));
// Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
