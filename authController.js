import db from "../db.js";
import jwt from "jsonwebtoken";

// USER REGISTER
export const registerUser = (req, res) => {
  const { name, phone, email, password } = req.body;

  db.query(
    "INSERT INTO users (name, phone, email, password) VALUES (?, ?, ?, ?)",
    [name, phone, email, password],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "User Registered" });
    }
  );
};

// USER LOGIN
export const loginUser = (req, res) => {
  const { phone, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE phone=? AND password=?",
    [phone, password],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      if (rows.length === 0)
        return res.status(401).json({ error: "Invalid credentials" });

      const token = jwt.sign({ id: rows[0].id }, "foodzone_secret");
      res.json({ message: "Login Success", token, user: rows[0] });
    }
  );
};

// VENDOR LOGIN
export const loginVendor = (req, res) => {
  const { phone, password } = req.body;

  db.query(
    "SELECT * FROM vendors WHERE phone=? AND password=?",
    [phone, password],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      if (rows.length === 0)
        return res.status(401).json({ error: "Invalid credentials" });

      const token = jwt.sign({ id: rows[0].id }, "vendor_secret");
      res.json({ message: "Vendor Login Success", token, vendor: rows[0] });
    }
  );
};

// ADMIN LOGIN
export const loginAdmin = (req, res) => {
  const { phone, password } = req.body;

  // Fixed hard-coded admin for now
  if (phone === "9999" && password === "admin123") {
    const token = jwt.sign({ id: 1 }, "admin_secret");
    return res.json({ message: "Admin Login Success", token });
  }

  res.status(401).json({ error: "Invalid Admin Credentials" });
};
