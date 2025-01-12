import cors from 'cors';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

import routes from './routes/index.js';

// const cors = require('cors');

// Initialize the app
const app = express();

// Middleware setup
// app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev')); // Log HTTP requests

app.use(
  cors({
    origin: 'http://localhost:5173', // No trailing slash
    methods: 'GET,POST,DELETE,PUT',
    allowedHeaders: 'Content-Type,Authorization'
  })
);

// Routes
app.get('/', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'Success' });
});
app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});
app.use('/api', routes); // Mount API routes

// Error handling middleware
app.use((err, req, res) => {
  console.error(err.stack); // Logs the error stack for debugging
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

export default app; // Export the configured app
