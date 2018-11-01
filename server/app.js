const express = require("express");
const logger = require("morgan");

const index = require("./routes/index");
const images = require("./routes/images.js");

const app = express();
app.use(logger("dev"));
app.use(express.json());

app.use("/", index);
app.use("/api/images", images);

module.exports = app;
