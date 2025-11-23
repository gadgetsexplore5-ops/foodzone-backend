import db from "../db.js";

// PLACE ORDER
export const placeOrder = (req, res) => {
  const {
    user_id,
    vendor_id,
    delivery_address,
    total_amount,
    delivery_charge,
    payment_mode,
    payment_status,
    payment_screenshot,
    transaction_id,
    items
  } = req.body;

  // Insert main order
  db.query(
    "INSERT INTO orders (user_id, vendor_id, delivery_address, total_amount, delivery_charge, payment_mode, payment_status, payment_screenshot, transaction_id, order_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'PENDING')",
    [
      user_id,
      vendor_id,
      delivery_address,
      total_amount,
      delivery_charge,
      payment_mode,
      payment_status,
      payment_screenshot,
      transaction_id
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      const order_id = result.insertId;

      // Insert order items
      items.forEach((item) => {
        db.query(
          "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
          [order_id, item.product_id, item.quantity, item.price]
        );
      });

      res.json({ message: "Order Placed", order_id });
    }
  );
};

// ORDER STATUS
export const getOrderStatus = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM orders WHERE id=?", [id], (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows[0]);
  });
};

// USER ORDER HISTORY
export const getOrderHistory = (req, res) => {
  const { user_id } = req.params;

  db.query(
    "SELECT * FROM orders WHERE user_id=? ORDER BY id DESC",
    [user_id],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      res.json(rows);
    }
  );
};
