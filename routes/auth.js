const passport = require("passport");

module.exports = app => {
  app.get("/", (req, res) => {
    res.redirect("/auth/google");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"] //asking the google for profile and email
    })
  );
  app.get("/auth/google/callback", passport.authenticate("google")); //extracting the data from callback
};
