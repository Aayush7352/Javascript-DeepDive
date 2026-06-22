// 005 - Operators
// ============================================

// Example 1: Basic operators
console.log('=== Operators ===');

// Example 2: Practical implementation
function learnoperators() {
  const message = 'Learning Operators';
  return message;
}

// Example 3: Advanced usage
class operatorsExample {
  constructor() {
    this.topic = 'Operators';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnoperators();
console.log(result);

const example = new operatorsExample();
console.log(example.describe());

module.exports = { learnoperators, operatorsExample };
