// 001 - Hello World
// ============================================

// Example 1: Basic hello-world
console.log('=== Hello World ===');

// Example 2: Practical implementation
function learnhelloworld() {
  const message = 'Learning Hello World';
  return message;
}

// Example 3: Advanced usage
class helloworldExample {
  constructor() {
    this.topic = 'Hello World';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnhelloworld();
console.log(result);

const example = new helloworldExample();
console.log(example.describe());

module.exports = { learnhelloworld, helloworldExample };
