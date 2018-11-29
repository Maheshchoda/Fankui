const passport = require("passport");

module.exports = app => {
  app.get("/api/home", (req, res) => {
    res.send(`It's working`);
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
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  ); //extracting the data from callback

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
