// 094 - Promise.race
// ============================================

// Example 1: Basic promise-race
console.log('=== Promise.race ===');

// Example 2: Practical implementation
function learnpromiserace() {
  const message = 'Learning Promise.race';
  return message;
}

// Example 3: Advanced usage
class promiseraceExample {
  constructor() {
    this.topic = 'Promise.race';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnpromiserace();
console.log(result);

const example = new promiseraceExample();
console.log(example.describe());

module.exports = { learnpromiserace, promiseraceExample };
