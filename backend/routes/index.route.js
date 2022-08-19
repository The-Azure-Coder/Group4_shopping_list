const express = require("express");
const router = express.Router();
const IndexController = require("../controllers/index.controller");
const {
  createItem,
  deleteItemsById,
  getAllItems,
  getItemById,
  updateItem,
  getItemsByCategory,
} = require("../controllers/items.controller");

router.route("/").get(IndexController.index);

router.route("/shopping_list").post(createItem).get(getAllItems);

router.route("/shopping_list/:id").delete(deleteItemsById).get(getItemById);

router.route("/shopping_list/update/:id").put(updateItem);

router.get("/shopping_category/:id", (getItemsByCategory))

module.exports = router;
