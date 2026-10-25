
const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/authController");
const { validateSignup } = require("../middleware/validateMiddleware");

// Register a new user
router.post("/signup", validateSignup, signup);

module.exports = router;
