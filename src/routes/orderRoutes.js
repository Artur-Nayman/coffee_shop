const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// USER
router.post('/place', orderController.placeOrder);
router.get('/mine', orderController.getMyOrders);

// ADMIN
router.get('/all', orderController.getAllOrders);
router.put('/status/:orderId', orderController.updateStatus);

module.exports = router;
