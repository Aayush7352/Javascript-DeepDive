// 054 - Call
// ============================================

// Example 1: Basic call
console.log('=== Call ===');

// Example 2: Practical implementation
function learncall() {
  const message = 'Learning Call';
  return message;
}

// Example 3: Advanced usage
class callExample {
  constructor() {
    this.topic = 'Call';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncall();
console.log(result);

const example = new callExample();
console.log(example.describe());

module.exports = { learncall, callExample };
