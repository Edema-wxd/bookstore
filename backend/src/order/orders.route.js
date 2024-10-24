const express = require("express");
const { createOrder, getOrderByEmail } = require("./orders.controller");
const router = express.Router();

// CREATE ORDER
router.post("/", createOrder);

// Get orders by email
router.get("/email/:email", getOrderByEmail);

module.exports = router;
