// 017 - Optional Chaining
// ============================================

// Example 1: Basic optional-chaining
console.log('=== Optional Chaining ===');

// Example 2: Practical implementation
function learnoptionalchaining() {
  const message = 'Learning Optional Chaining';
  return message;
}

// Example 3: Advanced usage
class optionalchainingExample {
  constructor() {
    this.topic = 'Optional Chaining';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnoptionalchaining();
console.log(result);

const example = new optionalchainingExample();
console.log(example.describe());

module.exports = { learnoptionalchaining, optionalchainingExample };
