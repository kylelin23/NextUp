// Dependencies
require('dotenv').config()
const session = require("express-session");

const createdSession = session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
});

module.exports = createdSession;