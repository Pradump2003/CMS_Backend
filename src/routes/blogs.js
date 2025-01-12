import express from 'express';

import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog
} from '../controllers/blogController.js';
const router = express.Router();

// Define product routes
router.get('/', getAllBlogs); // GET /products
router.get('/:id', getBlogById); // GET /products/:id
router.post('/', createBlog); // POST /products
router.put('/:id', updateBlog); // PUT /products/:id
router.delete('/:id', deleteBlog); // DELETE /products/:id

export default router;
