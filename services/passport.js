const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("../config/keys");

const User = mongoose.model("user");

//Encrypting the User
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//Decrypting the User
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//setting the passport to use Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //accessToken to access the data of user from google
      //It's going to expire after some time, we use refreshToken (to get accessToken again)
      //refreshToken to refresh the accessToken
      const { id, displayName: name } = profile;
      const oldUser = await User.findOne({ googleId: id });
      //while authentication procedure we are checking
      //whether the user is existing or not so with done(callback)
      //it going to resume the authentication flow
      if (oldUser) {
        //return null if newUser
        return done(null, oldUser);
        //null if some error occurs
        //oldUser if user found
      }
      const user = await new User({ googleId: id }).save();
      done(null, user);
    }
  )
);
