const express = require("express");
const app = express();
const PORT = process.env.PORT || 2018;

app.get("/", (req, res) => {
  res.json({ message: `Hello there baby` });
});

app.listen(PORT, err => {
  if (err) console.log(`There is some problem with server`);
  console.log(`You server is started on port number ${PORT}`);
});
