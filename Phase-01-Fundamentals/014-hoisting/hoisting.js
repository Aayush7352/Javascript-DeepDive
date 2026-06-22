// 014 - Hoisting
// ============================================

// Example 1: Basic hoisting
console.log('=== Hoisting ===');

// Example 2: Practical implementation
function learnhoisting() {
  const message = 'Learning Hoisting';
  return message;
}

// Example 3: Advanced usage
class hoistingExample {
  constructor() {
    this.topic = 'Hoisting';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnhoisting();
console.log(result);

const example = new hoistingExample();
console.log(example.describe());

module.exports = { learnhoisting, hoistingExample };
