// 045 - Currying
// ============================================

// Example 1: Basic currying
console.log('=== Currying ===');

// Example 2: Practical implementation
function learncurrying() {
  const message = 'Learning Currying';
  return message;
}

// Example 3: Advanced usage
class curryingExample {
  constructor() {
    this.topic = 'Currying';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncurrying();
console.log(result);

const example = new curryingExample();
console.log(example.describe());

module.exports = { learncurrying, curryingExample };
