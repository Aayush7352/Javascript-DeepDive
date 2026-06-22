// 095 - async await
// ============================================

// Example 1: Basic async-await
console.log('=== async await ===');

// Example 2: Practical implementation
function learnasyncawait() {
  const message = 'Learning async await';
  return message;
}

// Example 3: Advanced usage
class asyncawaitExample {
  constructor() {
    this.topic = 'async await';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnasyncawait();
console.log(result);

const example = new asyncawaitExample();
console.log(example.describe());

module.exports = { learnasyncawait, asyncawaitExample };
