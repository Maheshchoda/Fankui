const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../config/keys");

//setting the passport to use Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      //accessToken to access the data of user from google
      //It's going to expire after some time, we use refreshToken (to get accessToken again)
      //refreshToken to refresh the accessToken
      console.log(`accessToken`, accessToken);
      console.log(`refreshToken`, refreshToken);
      console.log(`profile`, profile);
      console.log(`cb`, cb);
    }
  )
);
