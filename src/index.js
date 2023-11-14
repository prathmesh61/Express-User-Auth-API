const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { connectionDB } = require("./lib/connection");
require("dotenv").config();

// db connection
// express app
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "prathmesh",
    resave: true,
    saveUninitialized: true,
  })
);

app.listen(PORT, () => {
  connectionDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
