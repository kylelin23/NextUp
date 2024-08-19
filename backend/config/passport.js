require('dotenv').config()
const passport = require("passport");
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;

const userModel = require("../models/userModel")

// Google Auth
passport.use(new GoogleStrategy({
  clientID:     process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/nextup"
},
(accessToken, refreshToken, profile, done) => {
  userModel.findOrCreate({ googleId: profile.id, realname: profile.displayName, email: profile.emails[0].value }, function (err, user) {
    return done(err, user);
  });
}
));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
    done(null, user.id)
  });
  
passport.deserializeUser((id, done) => {
    userModel.findById(id)
      .then((user) => {
          done(null, user);
      })
      .catch((err) => {
          done(err, null);
      });
});

module.exports = passport;