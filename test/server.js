const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/result", (req, res) => {
  console.log(req.query);
});

app.listen(8000);
