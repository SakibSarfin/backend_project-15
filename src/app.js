const express = require('express');
const config = require('./config/env');
const configureServer = require('./config/server');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

const app = express();

// Apply server configuration (cors, body parsing, morgan)
configureServer(app);

// Mount API routes
app.use('/api', routes);

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to the Backend API',
    version: '1.0.0',
    endpoints: {
      health:      'GET  /api/health',
      getMessage:  'GET  /api/message',
      postMessage: 'POST /api/message',
    },
  });
});

// 404 handler
app.use(notFound);

// Global error handler
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  console.log(`\n🚀 Server running in ${config.nodeEnv} mode`);
  console.log(`📡 Listening on http://localhost:${config.port}`);
  console.log(`📋 API Base: http://localhost:${config.port}/api\n`);
});

module.exports = app;