// 038 - Arrow Functions
// ============================================

// Example 1: Basic arrow-functions
console.log('=== Arrow Functions ===');

// Example 2: Practical implementation
function learnarrowfunctions() {
  const message = 'Learning Arrow Functions';
  return message;
}

// Example 3: Advanced usage
class arrowfunctionsExample {
  constructor() {
    this.topic = 'Arrow Functions';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnarrowfunctions();
console.log(result);

const example = new arrowfunctionsExample();
console.log(example.describe());

module.exports = { learnarrowfunctions, arrowfunctionsExample };
