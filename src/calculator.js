#!/usr/bin/env node

// Node.js CLI Calculator
// Supports basic arithmetic operations: addition (+), subtraction (-), multiplication (*), division (/)

/**
 * Performs basic arithmetic operations
 * @param {number} a - First number
 * @param {string} op - Operator (+, -, *, /)
 * @param {number} b - Second number
 * @returns {number} Result of the operation
 * @throws {Error} If operation is invalid or division by zero
 */
function calculate(a, op, b) {
  switch (op) {
    case '+':
      // Addition operation
      return a + b;
    case '-':
      // Subtraction operation
      return a - b;
    case '*':
      // Multiplication operation
      return a * b;
    case '/':
      // Division operation
      if (b === 0) {
        throw new Error('Division by zero');
      }
      return a / b;
    default:
      throw new Error('Unsupported operation. Supported operations: +, -, *, /');
  }
}

// Export the calculate function for use as a module
module.exports = { calculate };

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.log('Usage: node src/calculator.js <num1> <operator> <num2>');
    console.log('Supported operators: +, -, *, /');
    process.exit(1);
  }

  const [num1, op, num2] = args;
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    console.log('Error: Invalid numbers provided');
    process.exit(1);
  }

  try {
    const result = calculate(a, op, b);
    console.log(`${a} ${op} ${b} = ${result}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
}