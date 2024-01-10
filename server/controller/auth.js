const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const signup = async (req, res) => {
  try {
    if (req.cookies.access_token) {
      return res.status(400).json({
        status: "error",
        msg: "User already logged in",
        data: null,
      });
    }
    const { email, username, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        status: "error",
        msg: "User already exists",
        data: null,
      });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    delete newUser.password;

    res.status(201).json({
      status: "success",
      msg: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
      data: null,
    });
  }
};

const login = async (req, res) => {
  try {
    if (req.cookies.access_token) {
      return res.redirect("/todos");
    }
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        status: "error",
        msg: "User not found",
        data: null,
      });
    }

    // Authenticate user - verify password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        status: "error",
        msg: "Incorrect password",
        data: null,
      });
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    res
      .cookie("access_token", token, {
        httpOnly: false,
      })
      .status(200)
      .json({
        status: "success",
        msg: "User logged in successfully",
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      msg: "Internal server error",
    });
  }
};

module.exports = { signup, login };
