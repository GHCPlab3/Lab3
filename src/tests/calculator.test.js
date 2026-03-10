const { calculate } = require('../calculator');

describe('Calculator basic operations', () => {
  test('adds two numbers', () => {
    expect(calculate(10, '+', 5)).toBe(15);
    expect(calculate(-2, '+', 2)).toBe(0);
  });

  test('subtracts two numbers', () => {
    expect(calculate(10, '-', 5)).toBe(5);
    expect(calculate(0, '-', 5)).toBe(-5);
  });

  test('multiplies two numbers', () => {
    expect(calculate(10, '*', 5)).toBe(50);
    expect(calculate(-2, '*', 3)).toBe(-6);
  });

  test('divides two numbers', () => {
    expect(calculate(10, '/', 5)).toBe(2);
    expect(calculate(9, '/', 3)).toBe(3);
  });

  test('division by zero throws error', () => {
    expect(() => calculate(10, '/', 0)).toThrow('Division by zero');
  });

  test('invalid operator throws error', () => {
    expect(() => calculate(10, '^', 2)).toThrow('Unsupported operation');
  });

  test('non-numeric input throws error', () => {
    expect(() => calculate('a', '+', 2)).toThrow();
    expect(() => calculate(2, '+', 'b')).toThrow();
  });
});
