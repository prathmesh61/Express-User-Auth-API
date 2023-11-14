const express = require("express");

const router = express.Router();

// user login route
router.get("/login", (req, res) => {
  return res.status(200).json("Hello login");
});
// user register route
router.post("/register", (req, res) => {
  return res.status(200).json("Hello");
});

module.exports = router;
