const express = require('express');
const router = express.Router();
const db = require('../config/db'); // database connection


// POST route to save a new product
router.post('/add-product', async (req, res) => {
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

    res.send('Product saved successfully!');
  } catch (err) {
    console.error('Error inserting product:', err);
    res.status(500).send('Error saving product');
  }
});


module.exports = router;
