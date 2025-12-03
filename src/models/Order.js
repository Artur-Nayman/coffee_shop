const db = require('../config/db');

exports.createOrder = async (userId, totalPrice) => {
    const sql = `
        INSERT INTO orders (user_id, total_price, status)
        VALUES (?, ?, 'pending')
    `;
    const [result] = await db.query(sql, [userId, totalPrice]);
    return result.insertId;
};

exports.updateStatus = async (orderId, status) => {
    const sql = `UPDATE orders SET status = ? WHERE id = ?`;
    await db.query(sql, [status, orderId]);
};

exports.getAllOrders = async () => {
    const sql = `SELECT * FROM orders ORDER BY created_at DESC`;
    const [rows] = await db.query(sql);
    return rows;
};

exports.getUserOrders = async (userId) => {
    const sql = `SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC`;
    const [rows] = await db.query(sql, [userId]);
    return rows;
};
