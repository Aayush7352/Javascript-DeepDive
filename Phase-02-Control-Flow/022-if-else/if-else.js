// 022 - if else
// ============================================

// Example 1: Basic if-else
console.log('=== if else ===');

// Example 2: Practical implementation
function learnifelse() {
  const message = 'Learning if else';
  return message;
}

// Example 3: Advanced usage
class ifelseExample {
  constructor() {
    this.topic = 'if else';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnifelse();
console.log(result);

const example = new ifelseExample();
console.log(example.describe());

module.exports = { learnifelse, ifelseExample };
