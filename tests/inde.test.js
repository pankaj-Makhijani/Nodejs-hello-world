const app = require('../index');
const supertest = require('supertest');

// Create a superagent instance from the express app
const request = supertest(app);

describe('API Endpoint Testing', () => {
  it('should respond with a greeting message', async () => {
    // Make a GET request to the /api/greet endpoint
    const response = await request.get('/');

    // Assert the response status code is 200 (OK)
    expect(response.status).toBe(200);
  });
});