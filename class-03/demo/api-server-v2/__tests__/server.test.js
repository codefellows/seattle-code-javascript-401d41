'use strict';

const { server } = require('../src/server.js'); // bring in your server for testing (because it is a module)
const supertest = require('supertest'); // pull in npm package of supertest for making requests and mocking a server env
const mockRequest = supertest(server); // mock the server for us

describe('API SERVER:', () => {

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/things').send({ name: 'brian' })
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('brian');
  });

  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/things/1');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/things');
    expect(response.status).toBe(200);
  });
});