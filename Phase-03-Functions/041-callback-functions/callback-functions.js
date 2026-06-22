// 041 - Callback Functions
// ============================================

// Example 1: Basic callback-functions
console.log('=== Callback Functions ===');

// Example 2: Practical implementation
function learncallbackfunctions() {
  const message = 'Learning Callback Functions';
  return message;
}

// Example 3: Advanced usage
class callbackfunctionsExample {
  constructor() {
    this.topic = 'Callback Functions';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncallbackfunctions();
console.log(result);

const example = new callbackfunctionsExample();
console.log(example.describe());

module.exports = { learncallbackfunctions, callbackfunctionsExample };
