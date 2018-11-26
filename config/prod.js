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
  }
};
