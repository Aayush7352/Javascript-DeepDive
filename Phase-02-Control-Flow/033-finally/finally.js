// 033 - finally
// ============================================

// Example 1: Basic finally
console.log('=== finally ===');

// Example 2: Practical implementation
function learnfinally() {
  const message = 'Learning finally';
  return message;
}

// Example 3: Advanced usage
class finallyExample {
  constructor() {
    this.topic = 'finally';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnfinally();
console.log(result);

const example = new finallyExample();
console.log(example.describe());

module.exports = { learnfinally, finallyExample };
