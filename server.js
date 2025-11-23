import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Test API
app.get("/", (req, res) => {
  res.send("FoodZone Backend Running");
});

// Server Start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
