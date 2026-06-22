// 132 - CommonJS
// ============================================

// Example 1: Basic commonjs
console.log('=== CommonJS ===');

// Example 2: Practical implementation
function learncommonjs() {
  const message = 'Learning CommonJS';
  return message;
}

// Example 3: Advanced usage
class commonjsExample {
  constructor() {
    this.topic = 'CommonJS';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncommonjs();
console.log(result);

const example = new commonjsExample();
console.log(example.describe());

module.exports = { learncommonjs, commonjsExample };
