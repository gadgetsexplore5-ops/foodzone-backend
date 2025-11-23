import db from "../db.js";

// GET ALL CATEGORIES
export const getCategories = (req, res) => {
  db.query("SELECT * FROM categories ORDER BY id DESC", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
};

// ADD CATEGORY
export const addCategory = (req, res) => {
  const { name, image } = req.body;

  db.query(
    "INSERT INTO categories (name, image) VALUES (?, ?)",
    [name, image],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Category Added" });
    }
  );
};

// DELETE CATEGORY
export const deleteCategory = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM categories WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Category Deleted" });
  });
};
