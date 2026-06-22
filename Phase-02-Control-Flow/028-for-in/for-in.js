// 028 - for in
// ============================================

// Example 1: Basic for-in
console.log('=== for in ===');

// Example 2: Practical implementation
function learnforin() {
  const message = 'Learning for in';
  return message;
}

// Example 3: Advanced usage
class forinExample {
  constructor() {
    this.topic = 'for in';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnforin();
console.log(result);

const example = new forinExample();
console.log(example.describe());

module.exports = { learnforin, forinExample };
