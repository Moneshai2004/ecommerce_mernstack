const express = require("express");
const app = express();
const productsRouter = require("./routes/product");

app.use("/api/v1/", productsRouter);

module.exports = app;
