// 052 - Object Methods
// ============================================

// Example 1: Basic object-methods
console.log('=== Object Methods ===');

// Example 2: Practical implementation
function learnobjectmethods() {
  const message = 'Learning Object Methods';
  return message;
}

// Example 3: Advanced usage
class objectmethodsExample {
  constructor() {
    this.topic = 'Object Methods';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnobjectmethods();
console.log(result);

const example = new objectmethodsExample();
console.log(example.describe());

module.exports = { learnobjectmethods, objectmethodsExample };
