const { JSONResponse } = require("../lib/helper");
const Categories = require("../models/categories.model");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    JSONResponse.success(res, "Success.", categories, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling item model.", error, 500);
    console.log(error);
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Categories.findById(req.params.id);
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling item model.", error, 500);
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await Categories.create(req.body);
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling item model.", error, 500);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling item model.", error, 500);
  }
};

exports.deleteCategoryById = async (req, res) => {
  try {
    const category = await Categories.findById(req.params.id);
    if (category) await category.delete();
    JSONResponse.success(res, "Success.", category, 200);
  } catch (error) {
    JSONResponse.error(res, "Failure handling item model.", error, 500);
  }
};
