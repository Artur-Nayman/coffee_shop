const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");
const auth = require("../middleware/authMiddleware");

// USER ROUTES

// Place new order
router.post("/place", auth, orderController.placeOrder);

// Get logged-in user's own orders
router.get("/mine", auth, orderController.getMyOrders);

// Cancel order belonging to logged-in user
router.put('/cancel/:orderId', auth, orderController.cancelOrder);

// ADMIN ROUTES

// Get all orders (admin only)
router.get("/all", auth, orderController.getAllOrders);

// Update order status (admin only)
router.put("/status/:orderId", auth, orderController.updateStatus);

module.exports = router;
