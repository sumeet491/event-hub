const express = require("express");
const cors = require("cors");

require("./db"); // MongoDB connect
const User = require("./models/User");

const app = express();

/* Middleware to read JSON body */
app.use(express.json());
app.use(cors());

/* Test route */
app.get("/", (req, res) => {
  res.status(200).send("Backend + MongoDB running");
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

    // check required fields
    if (!name || !username || !email || !password || !collegeUid || !department) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // duplicate email or username check
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already has an account"
      });
    }

    // create new user
    await User.create({
      name,
      username,
      email,
      password,
      collegeUid,
      department,
      profilePic
    });

    res.status(201).json({
      success: true,
      message: "Signup successful"
    });

  } catch (error) {
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

    // email OR username se find karo
    const user = await User.findOne({
      $or: [
        { email: identifier },
        { username: identifier }
      ]
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

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
});

/* Server start */
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
