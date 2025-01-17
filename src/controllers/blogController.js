import Blog from '../models/blogModel.js';
import {
  createBlogService,
  deleteBlogService,
  getBlogByIdService,
  updateBlogService
} from '../services/blogService.js';

const getAllBlogs = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const parsedLimit = parseInt(limit);
  try {
    const resp = await Blog.find()
      .limit(parsedLimit)
      .skip((page - 1) * parsedLimit);
    const totalBlogs = await Blog.countDocuments();
    if (!resp || resp.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'No blogs found'
      });
    }
    res.json({
      status: 200,
      data: resp,
      totalPages: Math.ceil(totalBlogs / parsedLimit),
      currentPage: parseInt(page),
      totalBlogs,
    });
  } catch (error) {
    res.json({ ...error });
  }
};

const getBlogById = async (req, res) => {
  try {
    const Id = req.params.id;
    const getService = await getBlogByIdService(Id);
    res.json({ message: `Get user with ID ${Id}`, data: getService });
  } catch (error) {
    res.json({ ...error });
  }
};

const createBlog = async (req, res) => {
  try {
    const payload = req.body;
    const resp = await createBlogService(payload);
    res.json({ message: 'Blog created successfully', data: resp });
  } catch (error) {
    res.json({ ...error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, content, tags, writer } = req.body;
    const Id = req.params.id;
    const updateService = await updateBlogService(Id, {
      title,
      content,
      tags,
      writer
    });
    res.json({ message: `Update user with ID ${Id}`, data: updateService });
  } catch (error) {
    res.json({ ...error });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const Id = req.params.id;
    const deleteService = await deleteBlogService(Id);
    res.json({ message: `Delete user with ID ${Id}`, data: deleteService });
  } catch (error) {
    res.json({ ...error });
  }
};

export { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog };
