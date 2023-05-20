const request = require('request');
const { expect } = require('chai');

describe('API Regex integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id return correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/222`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 222');
      done();
    });
  });

  it('GET /cart/:id return 404 response when :id is a negative number', (done) => {
    request.get(`${API_URL}/cart/-222`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id return 404 response when :id is NOT a number', (done) => {
    request.get(`${API_URL}/cart/de00`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
