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


module.exports = router;
