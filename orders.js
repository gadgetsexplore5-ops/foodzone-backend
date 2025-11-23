import express from "express";
import {
  placeOrder,
  getOrderStatus,
  getOrderHistory
} from "../controllers/orderController.js";

const router = express.Router();

// PLACE ORDER
router.post("/place", placeOrder);

// ORDER STATUS
router.get("/status/:id", getOrderStatus);

// USER ORDER HISTORY
router.get("/history/:user_id", getOrderHistory);

export default router;
