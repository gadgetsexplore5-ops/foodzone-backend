import db from "../db.js";

// UPLOAD PAYMENT SCREENSHOT
export const uploadPayment = (req, res) => {
  const file = req.file ? req.file.filename : null;

  if (!file)
    return res.status(400).json({ error: "Screenshot not uploaded" });

  res.json({
    message: "Screenshot uploaded",
    file: "/uploads/" + file
  });
};

// VERIFY PAYMENT
export const verifyPayment = (req, res) => {
  const { order_id, status } = req.body;

  db.query(
    "UPDATE orders SET payment_status=? WHERE id=?",
    [status, order_id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Payment status updated" });
    }
  );
};
