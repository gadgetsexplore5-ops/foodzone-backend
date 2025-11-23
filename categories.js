import express from "express";
import {
  getCategories,
  addCategory,
  deleteCategory
} from "../controllers/categoryController.js";

const router = express.Router();

// GET ALL CATEGORIES
router.get("/", getCategories);

// ADD CATEGORY
router.post("/add", addCategory);

// DELETE CATEGORY
router.delete("/delete/:id", deleteCategory);

export default router;
