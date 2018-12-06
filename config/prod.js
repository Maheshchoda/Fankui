module.exports = {
  cookie: {
    cookieKey: process.env.COOKIE_KEY
  },
  google: {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  },
  db: {
    mongoURI: process.env.MONGO_URI
  },
  stripe: {
    PublishableKey: process.env.PUBLISHABLE_KEY,
    SecretKey: process.env.SECRET_KEY
  },
  sendGrid: {
    sendGridKey: process.env.SEND_GRID_KEY
  },
  redirectDomain: {
    domain: process.env.REDIRECT_DOMAIN
  }
};
