// 145 - Environment Variables
// ============================================

// Example 1: Basic environment-variables
console.log('=== Environment Variables ===');

// Example 2: Practical implementation
function learnenvironmentvariables() {
  const message = 'Learning Environment Variables';
  return message;
}

// Example 3: Advanced usage
class environmentvariablesExample {
  constructor() {
    this.topic = 'Environment Variables';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnenvironmentvariables();
console.log(result);

const example = new environmentvariablesExample();
console.log(example.describe());

module.exports = { learnenvironmentvariables, environmentvariablesExample };
