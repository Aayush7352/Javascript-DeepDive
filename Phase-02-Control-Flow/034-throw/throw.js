// 034 - throw
// ============================================

// Example 1: Basic throw
console.log('=== throw ===');

// Example 2: Practical implementation
function learnthrow() {
  const message = 'Learning throw';
  return message;
}

// Example 3: Advanced usage
class throwExample {
  constructor() {
    this.topic = 'throw';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnthrow();
console.log(result);

const example = new throwExample();
console.log(example.describe());

module.exports = { learnthrow, throwExample };
