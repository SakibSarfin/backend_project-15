# Backend Project

A complete Node.js + Express backend project with a clean MVC structure.

## 📁 Project Structure

```
backend-project/
├── src/
│   ├── config/
│   │   ├── env.js            # Environment variable config
│   │   └── server.js         # Express server config (cors, body parser)
│   ├── controllers/
│   │   └── message.controller.js  # GET & POST request handlers
│   ├── middlewares/
│   │   ├── errorHandler.js   # Global error handling
│   │   ├── notFound.js       # 404 handler
│   │   └── logger.js         # Custom request logger
│   ├── models/
│   │   └── message.model.js  # Message response model
│   ├── routes/
│   │   ├── index.js          # Route aggregator
│   │   └── message.routes.js # Message-specific routes
│   ├── utils/
│   │   └── responseHelper.js # Response utility helpers
│   └── app.js                # App entry point
├── tests/
│   └── message.test.js       # Jest + Supertest test suite
├── .env                      # Environment variables
├── .env.example              # Example env file
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run in production
npm start

# Run tests
npm test
```

## 📡 API Endpoints

| Method | Endpoint     | Response             |
| ------ | ------------ | -------------------- |
| GET    | /            | Welcome message      |
| GET    | /api/health  | Server health status |
| GET    | /api/message | "I am get request."  |
| POST   | /api/message | "I am post request." |
