// 125 - Static Methods
// ============================================

// Example 1: Basic static-methods
console.log('=== Static Methods ===');

// Example 2: Practical implementation
function learnstaticmethods() {
  const message = 'Learning Static Methods';
  return message;
}

// Example 3: Advanced usage
class staticmethodsExample {
  constructor() {
    this.topic = 'Static Methods';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnstaticmethods();
console.log(result);

const example = new staticmethodsExample();
console.log(example.describe());

module.exports = { learnstaticmethods, staticmethodsExample };
