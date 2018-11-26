if (process.env.NODE_ENV === "production") {
  //we are in the production mode
  module.exports = require("./prod");
} else {
  //we are in the Development mode
  module.exports = require("./dev");
}
