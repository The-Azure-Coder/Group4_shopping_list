const db = require("mongoose");
const Schema = db.Schema
let itemsSchema = new db.Schema({
  categoryID: { type: Schema.Types.ObjectId, required: true, ref: 'category' },
  item_name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = db.model("items", itemsSchema);
