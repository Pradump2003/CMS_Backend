import app from './app.js';
import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';

// Connect to MongoDB and start the server
const startServer = async () => {
  try {
    await connectDB(); // Ensure the database is connected
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();
