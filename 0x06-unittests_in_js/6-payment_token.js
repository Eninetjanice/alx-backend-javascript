const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  if (success) {
    resolve({ data: 'Successful response from the API' });
  } else {
    _reject();
  }
});

module.exports = getPaymentTokenFromAPI;
