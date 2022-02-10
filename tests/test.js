const request = require('supertest');

const app = require('../index');

describe('GET/', () => {
  it('Should responds with Hello World', (done) => {
    request(app).get('/').expect('Hello world', done);
  });
});