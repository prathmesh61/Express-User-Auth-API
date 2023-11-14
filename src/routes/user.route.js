const express = require("express");
const {
  login,
  register,
  getUsers,
  logout,
} = require("../controllers/user.controller.js");
const router = express.Router();

// user login route
router.get("/login", login);
// user register route
router.post("/register", register);
// get all users
router.get("/all-user", getUsers);
// logout route
router.get("/logout", logout);

module.exports = router;
