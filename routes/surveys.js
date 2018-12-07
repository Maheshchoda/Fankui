const _ = require("lodash");
const Path = require("path-parser").default;
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplate/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({
        email: email.trim()
      })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    //send email to the customer
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;

      const user = await req.user.save();

      res.send(user);
    } catch (e) {
      res.status(422).send(err);
    }
  });

  app.post("/api/surveys/webhook", (req, res) => {
    const events = _.map(req.body, ({ email, url }) => {
      const pathname = new URL(url).pathname;
      const p = new Path("/api/surveys/:surveyId/:choice");
      const match = p.test(pathname);
      if (match) {
        return {
          email,
          surveyId: match.surveyId,
          choice: match.choice
        };
      }
    });
    const compactEvents = _.compact(events);
    const uniqueEvents = _.uniqBy(compactEvents, "email", "surveyId");
    res.send({});
  });

  app.get("/api/surveys/feedback", (req, res) => {
    res.send(`Thanks for you feedback`);
  });
};
