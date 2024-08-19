// General Dependencies
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

// Auth
const session = require("./config/session");
const passport = require("./config/passport");

// Models
const userModel = require("./models/userModel");
const groupModel = require("./models/groupModel");
const evenModel = require("./models/groupModel");

// Backend Setup
const app = express();
const BACKEND_PORT = 3000;

// Auth Setup
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

// Routes
const authRoutes = require("./routes/authRoutes");

mongoose.connect(process.env.MONGO_URL).then( // start server only when mongo connection made
    () => {app.listen(BACKEND_PORT, () => console.log(`Server started on port ${BACKEND_PORT}`));}
);

// Using Routes
app.use("/auth/google", authRoutes);