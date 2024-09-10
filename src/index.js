// src/index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
