const db = require("mongoose");

let categoriesSchema = new db.Schema({
  category_name: { type: String, required: true },
});

module.exports = db.model("category", categoriesSchema);
