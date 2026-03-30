import { connectDB } from './config/db.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});