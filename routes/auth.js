const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.send(`Welcome to the Home`);
  });
  app.get("/api/user", (req, res) => {
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
