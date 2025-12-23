require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

require("./db"); // MongoDB connect
const User = require("./models/User");

const app = express();

/* =====================
   MIDDLEWARES
===================== */
app.use(express.json());
app.use(cors());

/* =====================
   SERVE FRONTEND FILES
===================== */
app.use(express.static(path.join(__dirname, "../frontend")));

/* =====================
   ROOT → LOGIN PAGE
===================== */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

/* =====================
   SIGNUP API
===================== */
app.post("/signup", async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      collegeUid,
      department,
      profilePic
    } = req.body;

    if (!name || !username || !email || !password || !collegeUid || !department) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already has an account"
      });
    }

    await User.create({
      name,
      username,
      email,
      password,
      collegeUid,
      department,
      profilePic
    });

    res.json({
      success: true,
      message: "Signup successful"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

/* =====================
   LOGIN API
===================== */
app.post("/login", async (req, res) => {
  try {
    const { identifier, password } = req.body;

    if (!identifier || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }]
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        success: false,
        message: "Invalid password"
      });
    }

    res.json({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        username: user.username,
        email: user.email,
        collegeUid: user.collegeUid,
        department: user.department
      }
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

/* =====================
   SERVER START
===================== */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
