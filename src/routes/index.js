import express from 'express';

import blogs from './blogs.js';
// const userRoutes = require('./userRoutes');
// const authRoutes = require('./authRoutes');
// const productRoutes = require('./productRoutes');

const router = express.Router();

// Mount individual routers
router.use('/blog', blogs); // Routes for user-related operations
// router.use('/auth', authRoutes); // Routes for authentication
// router.use('/products', productRoutes); // Routes for product-related operations

export default router; // Export the configured app
