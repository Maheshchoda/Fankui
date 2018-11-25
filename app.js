const express = require("express");
require("./services/passport");

const app = express();

require("./routes/auth")(app);

const PORT = process.env.PORT || 2018;
app.listen(PORT, err => {
  if (err) console.log(`There is some problem with server`);
  console.log(`You server is started on port number ${PORT}`);
});
