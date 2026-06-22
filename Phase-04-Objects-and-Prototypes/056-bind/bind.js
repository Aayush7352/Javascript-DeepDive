// 056 - Bind
// ============================================

// Example 1: Basic bind
console.log('=== Bind ===');

// Example 2: Practical implementation
function learnbind() {
  const message = 'Learning Bind';
  return message;
}

// Example 3: Advanced usage
class bindExample {
  constructor() {
    this.topic = 'Bind';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnbind();
console.log(result);

const example = new bindExample();
console.log(example.describe());

module.exports = { learnbind, bindExample };
