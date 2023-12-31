const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { connectionDB } = require("./lib/connection");
const cors = require("cors");
const userRouter = require("./routes/user.route.js");
require("dotenv").config();

// express app
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "prathmesh",
    resave: true,
    saveUninitialized: true,
  })
);

//routet
app.use("/user", userRouter);

app.listen(PORT, () => {
  // db connection
  connectionDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
