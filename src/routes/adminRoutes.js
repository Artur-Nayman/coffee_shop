const express = require('express');
const router = express.Router();
const db = require('../config/db'); // database connection

// Middleware to check for admin role
const isAdmin = (req, res, next) => {
    if (req.userData && req.userData.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: Admins only' });
    }
};

// POST route to save a new product
router.post('/add-product', isAdmin, async (req, res) => {
  const { name, description, price, image } = req.body;

  try {
    const sql = `
      INSERT INTO products (name, description, price, image)
      VALUES (?, ?, ?, ?)
    `;

    await db.execute(sql, [
      name,
      description,
      price,
      image || null  // if image is empty, store NULL
    ]);

    res.status(200).json({ message: 'Product saved successfully!' });
  } catch (err) {
    console.error('Error inserting product:', err);
    res.status(500).json({ error: 'Error saving product' });
  }
});

// GET route to list all products for admin (API)
router.get('/products', async (req, res) => {
  try {
    const sql = 'SELECT id, name, description, price, image FROM products';
    const [rows] = await db.execute(sql);

    res.json(rows);  // this route is now a clean JSON API
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).send('Error loading products');
  }
});

// DELETE product by ID
router.delete('/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const sql = "DELETE FROM products WHERE id = ?";
    await db.execute(sql, [productId]);

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Error deleting product" });
  }
});


// GET one product by ID (for edit form)
router.get('/products/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const sql = 'SELECT id, name, description, price, image FROM products WHERE id = ?';
    const [rows] = await db.execute(sql, [productId]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(rows[0]); // return single product object
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ error: 'Error loading product' });
  }
});

// UPDATE product by ID
router.put('/products/:id', async (req, res) => {
  const productId = req.params.id;
  const { name, description, price, image } = req.body;

  try {
    const sql = `
      UPDATE products
      SET name = ?, description = ?, price = ?, image = ?
      WHERE id = ?
    `;

    await db.execute(sql, [
      name,
      description,
      price,
      image || null,
      productId
    ]);

    res.json({ message: 'Product updated successfully' });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ error: 'Error updating product' });
  }
});





module.exports = router;
