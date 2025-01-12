// models/userModel.js
import mongoose from 'mongoose';

// Define the schema for the Blog model
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
      trim: true
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      trim: true
    },
    tags: {
      type: String,
      required: [true, 'tags is required']
    },
    writer: {
      type: String,
      required: [true, 'writer name is required']
    }
  },
  { timestamps: true }
);

// Create and export the Blog model
const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
