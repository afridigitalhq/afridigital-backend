import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Health route
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Auth login route
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    res.json({ token: 'demo-token', email });
  } else {
    res.status(400).json({ error: 'Email and password required' });
  }
});

// Wallet route
app.get('/api/wallet', (req, res) => res.json({ balance: 100 }));

app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
