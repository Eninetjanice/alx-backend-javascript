// Unittest for calculateNumber function

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded int numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
    assert.strictEqual(calculateNumber(2.49, 3.51), 6);
    assert.strictEqual(calculateNumber(2.99, 3.01), 6);
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});
