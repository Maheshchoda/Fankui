const passport = require("passport");

module.exports = app => {
  app.get("/api/home", (req, res) => {
    res.send("Welcome back to the Express");
  });
  app.get("/api/user", (req, res) => {
    console.log(`You accesed the user`);
    res.send(req.user);
  });
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"] //asking the google for profile and email
    })
  );
  app.get("/auth/google/callback", passport.authenticate("google")); //extracting the data from callback

  app.get("/logout", (req, res) => {
    req.logout();
    res.send(`You are logeed out`);
  });
};
