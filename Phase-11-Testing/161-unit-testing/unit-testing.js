// 161 - Unit Testing
// ============================================

// Example 1: Basic unit-testing
console.log('=== Unit Testing ===');

// Example 2: Practical implementation
function learnunittesting() {
  const message = 'Learning Unit Testing';
  return message;
}

// Example 3: Advanced usage
class unittestingExample {
  constructor() {
    this.topic = 'Unit Testing';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnunittesting();
console.log(result);

const example = new unittestingExample();
console.log(example.describe());

module.exports = { learnunittesting, unittestingExample };
