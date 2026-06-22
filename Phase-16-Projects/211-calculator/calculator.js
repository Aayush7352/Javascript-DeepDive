// 211 - Calculator
// ============================================

// Example 1: Basic calculator
console.log('=== Calculator ===');

// Example 2: Practical implementation
function learncalculator() {
  const message = 'Learning Calculator';
  return message;
}

// Example 3: Advanced usage
class calculatorExample {
  constructor() {
    this.topic = 'Calculator';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncalculator();
console.log(result);

const example = new calculatorExample();
console.log(example.describe());

module.exports = { learncalculator, calculatorExample };
