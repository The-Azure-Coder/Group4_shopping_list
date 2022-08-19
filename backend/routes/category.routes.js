const express = require("express");
const router = express.Router();
const {
  createCategory,
  deleteCategoryById,
  getAllCategories,
  getCategoryById,
  updateCategory,
} = require("../controllers/categories.controller");

const { getItemsByCategory } = require("../controllers/items.controller");

router.route("/").post(createCategory).get(getAllCategories);

router.route("/items/:id").get(getItemsByCategory);
router
  .route("/:id")
  .delete(deleteCategoryById)
  .get(getCategoryById)
  .put(updateCategory);

module.exports = router;
