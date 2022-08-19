const db = require("mongoose");

let categorySchema = new db.Schema(
  {
    category_name: { type: String, required: true, unique: true },
  },
  { collection: "categories" }
);

module.exports = db.model("categories", categorySchema);
