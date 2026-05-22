const express = require('express');
const router = express.Router();

const messageRoutes = require('./message.routes');

// Mount routes
router.use('/message', messageRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'Server is up and running',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;