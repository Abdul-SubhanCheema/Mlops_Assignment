// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register User
exports.registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
try {
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  // Compare plaintext password (not recommended)
  if (password !== user.password) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // If valid, generate a token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
} catch (error) {
  res.status(500).json({ error: "Server error" });
}

};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Return the original password (not secure)
    
    res.status(200).json({  success: true,password: user.password });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
