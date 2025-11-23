import db from "../db.js";

// VENDOR DETAILS
export const getVendorProfile = (req, res) => {
  const { vendor_id } = req.params;

  db.query(
    "SELECT * FROM vendors WHERE id=?",
    [vendor_id],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      res.json(rows[0]);
    }
  );
};

// VENDOR PRODUCTS LIST
export const getVendorProducts = (req, res) => {
  const { vendor_id } = req.params;

  db.query(
    "SELECT * FROM products WHERE vendor_id=? ORDER BY id DESC",
    [vendor_id],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      res.json(rows);
    }
  );
};

// ADD PRODUCT (VENDOR SIDE)
export const addVendorProduct = (req, res) => {
  const { vendor_id, category_id, name, description, price, image } = req.body;

  db.query(
    "INSERT INTO products (vendor_id, category_id, name, description, price, image) VALUES (?, ?, ?, ?, ?, ?)",
    [vendor_id, category_id, name, description, price, image],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Product Added by Vendor" });
    }
  );
};

// UPDATE ORDER STATUS (VENDOR)
export const updateOrderStatus = (req, res) => {
  const { order_id, order_status } = req.body;

  db.query(
    "UPDATE orders SET order_status=? WHERE id=?",
    [order_status, order_id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Order Status Updated" });
    }
  );
};

// VENDOR ORDERS LIST
export const getVendorOrders = (req, res) => {
  const { vendor_id } = req.params;

  db.query(
    "SELECT * FROM orders WHERE vendor_id=? ORDER BY id DESC",
    [vendor_id],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      res.json(rows);
    }
  );
};
