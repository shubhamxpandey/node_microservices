const express = require("express");

const startConsumer = require("./consumer");

const app = express();

startConsumer();

app.get("/admin", (req, res) => {

  res.send("Admin Service Running");
});

app.listen(4000, () => {

  console.log("Admin running on 4000");
});