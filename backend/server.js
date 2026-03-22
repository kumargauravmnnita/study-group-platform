const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const User = require("./models/User");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Study Group Platform API",
    status: "Server is running! ",
    database: "Connected to MongoDB ",
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API is working!",
  });
});

const PORT = process.env.PORT || 5000;

app.post("/api/test/create-user", async (req, res) => {
  try {
    const newUser = new User({
      username: "testuser",
      email: "test@example.com",
      password: "password123", // We'll hash this later!
      skills: ["JavaScript", "React", "Node.js"],
    });

    const savedUser = await newUser.save();

    res.json({
      success: true,
      message: "User created successfully!",
      user: savedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
