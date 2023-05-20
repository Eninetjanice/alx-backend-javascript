const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalSum}`);
};

module.exports = sendPaymentRequestToApi;
