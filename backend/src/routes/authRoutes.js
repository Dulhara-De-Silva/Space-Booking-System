
const express = require("express");
const router = express.Router();

const { signup, signin } = require("../controllers/authController");
const { validateSignup } = require("../middleware/validateMiddleware");

// Register a new user
router.post("/signup", validateSignup, signup);
router.post("/signin", signin);

module.exports = router;
