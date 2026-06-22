// 025 - for Loop
// ============================================

// Example 1: Basic for-loop
console.log('=== for Loop ===');

// Example 2: Practical implementation
function learnforloop() {
  const message = 'Learning for Loop';
  return message;
}

// Example 3: Advanced usage
class forloopExample {
  constructor() {
    this.topic = 'for Loop';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnforloop();
console.log(result);

const example = new forloopExample();
console.log(example.describe());

module.exports = { learnforloop, forloopExample };
