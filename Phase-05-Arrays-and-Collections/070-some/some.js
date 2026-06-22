// 070 - some()
// ============================================

// Example 1: Basic some
console.log('=== some() ===');

// Example 2: Practical implementation
function learnsome() {
  const message = 'Learning some()';
  return message;
}

// Example 3: Advanced usage
class someExample {
  constructor() {
    this.topic = 'some()';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnsome();
console.log(result);

const example = new someExample();
console.log(example.describe());

module.exports = { learnsome, someExample };
