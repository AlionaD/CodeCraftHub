// src/routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// POST /register - Register new user
router.post('/register', registerUser);

// POST /login - Login user
router.post('/login', loginUser);

module.exports = router;
