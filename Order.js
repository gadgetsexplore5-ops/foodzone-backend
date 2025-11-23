// Order Model (Simple Structure)
const Order = {
  id: Number,
  user_id: Number,
  vendor_id: Number,
  delivery_address: String,
  total_amount: Number,
  delivery_charge: Number,
  payment_mode: String,
  payment_status: String,
  payment_screenshot: String,
  transaction_id: String,
  order_status: String,
  created_at: Date
};

export default Order;
