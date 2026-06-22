// 165 - Mocking
// ============================================

// Example 1: Basic mocking
console.log('=== Mocking ===');

// Example 2: Practical implementation
function learnmocking() {
  const message = 'Learning Mocking';
  return message;
}

// Example 3: Advanced usage
class mockingExample {
  constructor() {
    this.topic = 'Mocking';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnmocking();
console.log(result);

const example = new mockingExample();
console.log(example.describe());

module.exports = { learnmocking, mockingExample };
