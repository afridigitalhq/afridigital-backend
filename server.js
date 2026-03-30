import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB first
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/afridigital';
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use(express.json());

// Auth routes
app.use('/api/auth', authRoutes);

// Health route
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Wallet route
app.get('/api/wallet', (req, res) => res.json({ balance: 100 }));

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
