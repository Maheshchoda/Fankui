const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

mongoose
  .connect(
    keys.db.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`Connected to the Database`);
  })
  .catch(err => {
    console.log(`There is some error with Database ${err}`);
  });

require("./models/User");
require("./services/passport");

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookie.cookieKey]
  })
);

app.use(passport.initialize()); //initialises the authentication module
app.use(passport.session()); //acts as a middleware to alter the req object and change the 'user'

//value that is currently the session id (from the client cookie) into the true deserialized user object.

// passport.session() is equivalent to app.use(passport.authenticate('session'));

require("./routes/auth")(app);

const PORT = process.env.PORT || 2018;
app.listen(PORT, err => {
  if (err) console.log(`There is some problem with server`);
  console.log(`You server is started on port number ${PORT}`);
});
