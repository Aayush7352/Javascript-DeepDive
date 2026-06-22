// 144 - EventEmitter
// ============================================

// Example 1: Basic eventemitter
console.log('=== EventEmitter ===');

// Example 2: Practical implementation
function learneventemitter() {
  const message = 'Learning EventEmitter';
  return message;
}

// Example 3: Advanced usage
class eventemitterExample {
  constructor() {
    this.topic = 'EventEmitter';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learneventemitter();
console.log(result);

const example = new eventemitterExample();
console.log(example.describe());

module.exports = { learneventemitter, eventemitterExample };
