import {
  createBlogService,
  deleteBlogService,
  getAllBlogsService,
  getBlogByIdService,
  updateBlogService
} from '../services/blogService.js';

// Example controllers/userController.js
const getAllBlogs = async (req, res) => {
  try {
    const resp = await getAllBlogsService();
    res.json({ status: 200, data: resp });
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
