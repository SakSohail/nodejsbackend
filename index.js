var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("Welcome to JavaTpoint!");
});
var server = app.listen(3000, function () {
  console.log("Server Started at 3000");
});
