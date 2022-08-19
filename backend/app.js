require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const indexRouter = require("./routes/index.route");
const categoryRouter = require("./routes/categories.route");

// Routes
app.use("/", indexRouter);
app.use("/", categoryRouter);

module.exports = app;
