import express from "express";
import {
  getProductsByCategory,
  addProduct,
  editProduct,
  getAllProducts
} from "../controllers/productController.js";

const router = express.Router();

// GET PRODUCTS BY CATEGORY
router.get("/:category_id", getProductsByCategory);

// ADD PRODUCT
router.post("/add", addProduct);

// EDIT PRODUCT
router.put("/edit", editProduct);

// GET ALL PRODUCTS (ADMIN)
router.get("/", getAllProducts);

export default router;
