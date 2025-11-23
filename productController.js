import db from "../db.js";

// GET PRODUCTS BY CATEGORY
export const getProductsByCategory = (req, res) => {
  const { category_id } = req.params;

  db.query(
    "SELECT * FROM products WHERE category_id=? ORDER BY id DESC",
    [category_id],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err });
      res.json(rows);
    }
  );
};

// ADD PRODUCT
export const addProduct = (req, res) => {
  const { vendor_id, category_id, name, description, price, image } = req.body;

  db.query(
    "INSERT INTO products (vendor_id, category_id, name, description, price, image) VALUES (?, ?, ?, ?, ?, ?)",
    [vendor_id, category_id, name, description, price, image],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Product Added" });
    }
  );
};

// EDIT PRODUCT
export const editProduct = (req, res) => {
  const { id, name, description, price, image, status } = req.body;

  db.query(
    "UPDATE products SET name=?, description=?, price=?, image=?, status=? WHERE id=?",
    [name, description, price, image, status, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Product Updated" });
    }
  );
};

// GET ALL PRODUCTS (ADMIN SIDE)
export const getAllProducts = (req, res) => {
  db.query("SELECT * FROM products ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};
