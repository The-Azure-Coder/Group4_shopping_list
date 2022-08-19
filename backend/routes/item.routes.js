const express = require("express");
const router = express.Router();
const {
  createItem,
  deleteItemsById,
  getAllItems,
  getItemById,
  updateItem,
  getItemsByCategory,
} = require("../controllers/items.controller");

router.route("/").post(createItem).get(getAllItems);
router.route("/:id").delete(deleteItemsById).get(getItemById).put(updateItem);

module.exports = router;
