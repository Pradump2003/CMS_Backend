import Blog from '../models/blogModel.js';
// Fetch all blogs
export const getAllBlogsService = async () => {
  return await Blog.find();
};


// Fetch a single blog by ID
export const getBlogByIdService = async (id) => {
  return await Blog.findById(id);
};

// Create a new blog
export const createBlogService = async (blogData) => {
  const blog = new Blog(blogData);
  return await blog.save();
};

// Update a blog
export const updateBlogService = async (id, updateData) => {
  return await Blog.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a blog
export const deleteBlogService = async (id) => {
  return await Blog.findByIdAndDelete(id);
};
