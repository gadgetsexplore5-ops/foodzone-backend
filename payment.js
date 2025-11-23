import express from "express";
import multer from "multer";
import { uploadPayment, verifyPayment } from "../controllers/paymentController.js";

const router = express.Router();

// Multer Setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

// UPLOAD PAYMENT SCREENSHOT
router.post("/upload", upload.single("screenshot"), uploadPayment);

// VERIFY PAYMENT
router.post("/verify", verifyPayment);

export default router;
