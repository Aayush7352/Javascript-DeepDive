// 082 - Call Stack
// ============================================

// Example 1: Basic call-stack
console.log('=== Call Stack ===');

// Example 2: Practical implementation
function learncallstack() {
  const message = 'Learning Call Stack';
  return message;
}

// Example 3: Advanced usage
class callstackExample {
  constructor() {
    this.topic = 'Call Stack';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncallstack();
console.log(result);

const example = new callstackExample();
console.log(example.describe());

module.exports = { learncallstack, callstackExample };
