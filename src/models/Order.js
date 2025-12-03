const db = require('../config/db');

// Luo uusi tilaus
exports.createOrder = async (userId, totalPrice) => {
    const sql = `
        INSERT INTO orders (user_id, total_price, status)
        VALUES (?, ?, 'pending')
    `;
    const [result] = await db.query(sql, [userId, totalPrice]);
    return result.insertId;
};

// Päivitä tilauksen tila
exports.updateStatus = async (orderId, status) => {
    const sql = `UPDATE orders SET status = ? WHERE id = ?`;
    await db.query(sql, [status, orderId]);
};

// Hae kaikki tilaukset (ADMIN)
exports.getAllOrders = async () => {
    const sql = `SELECT * FROM orders ORDER BY created_at DESC`;
    const [rows] = await db.query(sql);
    return rows;
};

// Hae yhden käyttäjän tilaukset
exports.getUserOrders = async (userId) => {
    const sql = `SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC`;
    const [rows] = await db.query(sql, [userId]);
    return rows;
};
