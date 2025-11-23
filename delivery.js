import express from "express";
import { calculateDelivery } from "../controllers/deliveryController.js";

const router = express.Router();

// CALCULATE DELIVERY CHARGE
router.post("/calculate", calculateDelivery);

export default router;
