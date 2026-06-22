// 066 - Array Methods
// ============================================

// Example 1: Basic array-methods
console.log('=== Array Methods ===');

// Example 2: Practical implementation
function learnarraymethods() {
  const message = 'Learning Array Methods';
  return message;
}

// Example 3: Advanced usage
class arraymethodsExample {
  constructor() {
    this.topic = 'Array Methods';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnarraymethods();
console.log(result);

const example = new arraymethodsExample();
console.log(example.describe());

module.exports = { learnarraymethods, arraymethodsExample };
