// 089 - Promises
// ============================================

// Example 1: Basic promises
console.log('=== Promises ===');

// Example 2: Practical implementation
function learnpromises() {
  const message = 'Learning Promises';
  return message;
}

// Example 3: Advanced usage
class promisesExample {
  constructor() {
    this.topic = 'Promises';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnpromises();
console.log(result);

const example = new promisesExample();
console.log(example.describe());

module.exports = { learnpromises, promisesExample };
