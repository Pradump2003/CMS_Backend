import mongoose from 'mongoose';

import { NODE_ENV } from './serverConfig.js';
import { LOCAL_DB_URL,PROD_DB_URL } from './serverConfig.js';

export default async function connectDB() {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(LOCAL_DB_URL);
    } else if (NODE_ENV === 'production') {
      await mongoose.connect(PROD_DB_URL);
    }
    console.log(`Connected to MongoDB database from ${NODE_ENV} environment`);
  } catch (error) {
    console.log('Error connecting to the database', error);
  }
}
