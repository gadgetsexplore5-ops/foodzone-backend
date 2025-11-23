import express from "express";
import {
  getVendorProfile,
  getVendorProducts,
  addVendorProduct,
  updateOrderStatus,
  getVendorOrders,
  uploadVendorBanner
} from "../controllers/vendorController.js";

import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

// VENDOR PROFILE
router.get("/profile/:vendor_id", getVendorProfile);

// VENDOR PRODUCTS
router.get("/products/:vendor_id", getVendorProducts);

// ADD PRODUCT
router.post("/add-product", addVendorProduct);

// UPDATE ORDER STATUS
router.post("/update-order-status", updateOrderStatus);

// VENDOR ORDERS LIST
router.get("/orders/:vendor_id", getVendorOrders);

// UPLOAD BANNER
router.post("/upload-banner", upload.single("banner"), uploadVendorBanner

