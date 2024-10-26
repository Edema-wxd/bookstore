<<<<<<< HEAD
const express = require("express");
const { createOrder, getOrderByEmail } = require("./orders.controller");
const router = express.Router();

// CREATE ORDER
router.post("/", createOrder);

// Get orders by email
router.get("/email/:email", getOrderByEmail);

module.exports = router;
=======
const express = require("express");
const { createOrder, getOrderByEmail } = require("./orders.controller");
const router = express.Router();

// CREATE ORDER
router.post("/", createOrder);

// Get orders by email
router.get("/email/:email", getOrderByEmail);

module.exports = router;
>>>>>>> 0180227e16bd74d3c94680c9abd621eade4e1c42
