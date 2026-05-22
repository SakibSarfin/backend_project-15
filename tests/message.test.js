const request = require('supertest');
const app = require('../src/app');

describe('Message API', () => {
  it('GET /api/message — should return "I am get request."', async () => {
    const res = await request(app).get('/api/message');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('I am get request.');
    expect(res.body.method).toBe('GET');
  });

  it('POST /api/message — should return "I am post request."', async () => {
    const res = await request(app).post('/api/message');
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('I am post request.');
    expect(res.body.method).toBe('POST');
  });

  it('GET /api/health — should return health status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  it('GET /unknown — should return 404', async () => {
    const res = await request(app).get('/unknown-route');
    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
  });
});