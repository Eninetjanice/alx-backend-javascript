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

  it('POST /login returns 200 status code where :username is the value of the body variable userName', (done) => {
    request.post(`${API_URL}/login`, {json: {userName: 'Betty'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal('Welcome Betty');
      done();
    });
  });

  it('GET /available_payments return 200 response when userName is valid', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(res.body)).to.be.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

});
