const express = require("express");
const passport = require("../config/passport");

const router = express.Router();

router.get("/", passport.authenticate("google", {scope: ['profile', 'email']}));

router.get("/nextup", passport.authenticate("google"), (req, res) => {
    return res.status(200).json(req.user);
});

module.exports = router;