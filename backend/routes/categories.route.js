const express = require("express");
const router = express.Router();
const IndexController = require("../controllers/index.controller");
const {
  createCategory,
  deleteCategoryById,
  getAllCategories,
  getCategoryById,
  updateCategory,
} = require("../controllers/categories.controller");

router.route("/").get(IndexController.index);

router.route("/categories").post(createCategory).get(getAllCategories);

router.route("/categories/:id").delete(deleteCategoryById).get(getCategoryById);

router.route("/categories/update/:id").put(updateCategory);

module.exports = router;
