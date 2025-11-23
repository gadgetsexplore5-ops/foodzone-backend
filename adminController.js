import db from "../db.js";

// GET ALL VENDORS
export const getVendors = (req, res) => {
  db.query("SELECT * FROM vendors ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

// APPROVE VENDOR
export const approveVendor = (req, res) => {
  const { vendor_id, status } = req.body;
  db.query(
    "UPDATE vendors SET status=? WHERE id=?",
    [status, vendor_id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Vendor status updated" });
    }
  );
};

// GET ALL CATEGORIES
export const getCategories = (req, res) => {
  db.query("SELECT * FROM categories ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

// GET ALL PRODUCTS
export const getProducts = (req, res) => {
  db.query("SELECT * FROM products ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

// GET ALL ORDERS
export const getOrders = (req, res) => {
  db.query("SELECT * FROM orders ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

// GET ALL USERS
export const getUsers = (req, res) => {
  db.query("SELECT * FROM users ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

// UPDATE DELIVERY SETTINGS
expo
