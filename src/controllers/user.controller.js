const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const User = require("../models/user.model");

// register controller
const register = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists please login" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    res.status(201).json({ user: result._id });
  } catch (error) {
    console.log("Please register again:", error);
    res.status(500).json({ message: "Please try again" });
  }
};
// login controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUserExist = await User.findOne({ email });
    if (!checkUserExist) {
      return res
        .status(400)
        .json({ message: "User does not exist register first" });
    }
    const match = await bcrypt.compare(password, checkUserExist.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: checkUserExist._id }, "secret", {
      expiresIn: "1h",
    });
    // Set token in cookie
    res.cookie("token", token, {
      httpOnly: true,
    });
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: "Please try again" });
  }
};

// logout users
const logout = async (req, res) => {
  try {
    // Clear session and cookie
    req.session.destroy();
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: "Please try again" });
  }
};

// get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Please try again" });
  }
};

module.exports = { login, register, getUsers, logout };
