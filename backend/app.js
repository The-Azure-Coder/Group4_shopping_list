require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const itemRouter = require("./routes/item.routes");
const categoryRouter = require("./routes/category.routes");

// Routes
app.use("/item", itemRouter);
app.use("/category", categoryRouter);

// Start Express App
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost:27017/ShoppingCart`,
  { useNewUrlParser: true },
  (err) => {
    if (err) throw err;
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  }
);
