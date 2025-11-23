import express from "express";
import {
  registerUser,
  loginUser,
  loginVendor,
  loginAdmin
} from "../controllers/authController.js";

const router = express.Router();

// USER REGISTER
router.post("/register", registerUser);

// USER LOGIN
router.post("/login", loginUser);

// VENDOR LOGIN
router.post("/vendor/login", loginVendor);

// ADMIN LOGIN
router.post("/admin/login", loginAdmin);

export default router;
