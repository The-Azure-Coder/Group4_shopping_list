const db = require("mongoose");
const { Schema } = db;

let itemsSchema = new Schema(
  {
    categoryID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "category",
    },
    item_name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { collection: "items" }
);

module.exports = db.model("items", itemsSchema);
