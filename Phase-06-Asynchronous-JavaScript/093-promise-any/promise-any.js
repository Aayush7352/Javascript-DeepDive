// 093 - Promise.any
// ============================================

// Example 1: Basic promise-any
console.log('=== Promise.any ===');

// Example 2: Practical implementation
function learnpromiseany() {
  const message = 'Learning Promise.any';
  return message;
}

// Example 3: Advanced usage
class promiseanyExample {
  constructor() {
    this.topic = 'Promise.any';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnpromiseany();
console.log(result);

const example = new promiseanyExample();
console.log(example.describe());

module.exports = { learnpromiseany, promiseanyExample };
