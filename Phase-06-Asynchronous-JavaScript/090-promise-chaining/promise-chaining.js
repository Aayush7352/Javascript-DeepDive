// 090 - Promise Chaining
// ============================================

// Example 1: Basic promise-chaining
console.log('=== Promise Chaining ===');

// Example 2: Practical implementation
function learnpromisechaining() {
  const message = 'Learning Promise Chaining';
  return message;
}

// Example 3: Advanced usage
class promisechainingExample {
  constructor() {
    this.topic = 'Promise Chaining';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnpromisechaining();
console.log(result);

const example = new promisechainingExample();
console.log(example.describe());

module.exports = { learnpromisechaining, promisechainingExample };
