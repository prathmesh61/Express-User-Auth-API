const express = require("express");

const app = express();

// user login route
app.post("/login", (req, res) => {
  return res.status(200).json("Hello");
});
// user register route
app.post("/register", (req, res) => {
  return res.status(200).json("Hello");
});
