// 042 - Higher Order Functions
// ============================================

// Example 1: Basic higher-order-functions
console.log('=== Higher Order Functions ===');

// Example 2: Practical implementation
function learnhigherorderfunctions() {
  const message = 'Learning Higher Order Functions';
  return message;
}

// Example 3: Advanced usage
class higherorderfunctionsExample {
  constructor() {
    this.topic = 'Higher Order Functions';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnhigherorderfunctions();
console.log(result);

const example = new higherorderfunctionsExample();
console.log(example.describe());

module.exports = { learnhigherorderfunctions, higherorderfunctionsExample };
