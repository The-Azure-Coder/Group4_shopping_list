require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

// Start Express App
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/ShoppingCart`, { useNewUrlParser: true }, (err) => {
  if (err) throw err;

  console.log("MongoDB Connected");

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});
