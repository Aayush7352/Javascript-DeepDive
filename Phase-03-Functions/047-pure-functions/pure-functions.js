// 047 - Pure Functions
// ============================================

// Example 1: Basic pure-functions
console.log('=== Pure Functions ===');

// Example 2: Practical implementation
function learnpurefunctions() {
  const message = 'Learning Pure Functions';
  return message;
}

// Example 3: Advanced usage
class purefunctionsExample {
  constructor() {
    this.topic = 'Pure Functions';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnpurefunctions();
console.log(result);

const example = new purefunctionsExample();
console.log(example.describe());

module.exports = { learnpurefunctions, purefunctionsExample };
