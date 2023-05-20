const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 7865;

app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (isNaN(id) || id < 0) {
    res.status(404).send('Invalid cart ID');
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
});

app.get('/available_payments', (_, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };

  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  let { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
