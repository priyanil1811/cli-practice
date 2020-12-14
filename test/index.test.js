// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.

var { getRate } = require('../src/functions');

describe('getRate()', function()  {
  test('return the rate when rates, initial currency and target currency provided', function() {
    var rates = {
      USD: {
          CAD: 2,
          INR: 70
      },
    };
    var initialCurrency = 'USD';
    var targetCurrency = 'INR';

    var rate = getRate(rates, initialCurrency, targetCurrency);
      
    expect(rate).toBe(70);
  });

});
