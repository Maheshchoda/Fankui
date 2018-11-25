const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: `Hello there baby` });
});

const PORT = process.env.port || 2018;
app.listen(PORT, err => {
  if (err) console.log(`There is some problem with server`);
  console.log(`You server is started on port number ${PORT}`);
});
