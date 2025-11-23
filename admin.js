import express from "express";
import {
  getVendors,
  approveVendor,
  getCategories,
  getProducts,
  getOrders,
  getUsers,
  updateDeliverySettings
} from "../controllers/adminController.js";

const router = express.Router();

// VENDORS
router.get("/vendors", getVendors);
router.post("/approve-vendor", approveVendor);

// CATEGORIES
router.get("/categories", getCategories);

// PRODUCTS
router.get("/products", getProducts);

// ORDERS
router.get("/orders", getOrders);

// USERS
router.get("/users", getUsers);

// DELIVERY SETTINGS
router.post("/delivery-settings", updateDeliverySettings);

export default router;
