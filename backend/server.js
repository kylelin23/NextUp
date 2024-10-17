// General Dependencies
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

// Auth
const session = require("./config/session");
const passport = require("./config/passport");

// Backend Setup
const app = express();
const BACKEND_PORT = 3000;

// Auth Setup
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

// More Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const friendRoutes = require("./routes/friendRoutes");
const eventRoutes = require("./routes/eventRoutes");

mongoose.connect(process.env.MONGO_URL).then( // start server only when mongo connection made
    () => {app.listen(BACKEND_PORT, () => console.log(`Server started on port ${BACKEND_PORT}`));}
);

// Using Routes
app.use("/auth/google", authRoutes);
app.use("/friend", friendRoutes);
app.use("/events", eventRoutes);