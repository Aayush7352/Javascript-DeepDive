// 091 - Promise.all
// ============================================

// Example 1: Basic promise-all
console.log('=== Promise.all ===');

// Example 2: Practical implementation
function learnpromiseall() {
  const message = 'Learning Promise.all';
  return message;
}

// Example 3: Advanced usage
class promiseallExample {
  constructor() {
    this.topic = 'Promise.all';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnpromiseall();
console.log(result);

const example = new promiseallExample();
console.log(example.describe());

module.exports = { learnpromiseall, promiseallExample };
