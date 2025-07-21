const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

// Use routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});