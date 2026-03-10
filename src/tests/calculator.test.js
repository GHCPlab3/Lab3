const { calculate } = require('../calculator');
const { expect } = require('chai');

describe('Calculator basic operations', () => {
  it('adds two numbers', () => {
    expect(calculate(10, '+', 5)).to.equal(15);
    expect(calculate(-2, '+', 2)).to.equal(0);
  });

  it('subtracts two numbers', () => {
    expect(calculate(10, '-', 5)).to.equal(5);
    expect(calculate(0, '-', 5)).to.equal(-5);
  });

  it('multiplies two numbers', () => {
    expect(calculate(10, '*', 5)).to.equal(50);
    expect(calculate(-2, '*', 3)).to.equal(-6);
  });

  it('divides two numbers', () => {
    expect(calculate(10, '/', 5)).to.equal(2);
    expect(calculate(9, '/', 3)).to.equal(3);
  });

  it('division by zero throws error', () => {
    expect(() => calculate(10, '/', 0)).to.throw('Division by zero');
  });

  it('invalid operator throws error', () => {
    expect(() => calculate(10, '^', 2)).to.throw('Unsupported operation');
  });

  it('non-numeric input throws error', () => {
    expect(() => calculate('a', '+', 2)).to.throw();
    expect(() => calculate(2, '+', 'b')).to.throw();
  });
});
