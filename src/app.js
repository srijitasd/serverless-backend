const express = require("express");
const csurf = require("csurf");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.route");
const { handleCsrfError } = require("./middlewares/middlewares");

const app = express();
const csurfProtection = csurf({ cookie: true });

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3001", "http://localhost:3000"], // The host name of the client
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/auth", csurfProtection, handleCsrfError, authRouter);

module.exports = app;
