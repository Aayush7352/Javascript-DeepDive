// 035 - Custom Errors
// ============================================

// Example 1: Basic custom-errors
console.log('=== Custom Errors ===');

// Example 2: Practical implementation
function learncustomerrors() {
  const message = 'Learning Custom Errors';
  return message;
}

// Example 3: Advanced usage
class customerrorsExample {
  constructor() {
    this.topic = 'Custom Errors';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncustomerrors();
console.log(result);

const example = new customerrorsExample();
console.log(example.describe());

module.exports = { learncustomerrors, customerrorsExample };
