// 186 - Adapter
// ============================================

// Example 1: Basic adapter
console.log('=== Adapter ===');

// Example 2: Practical implementation
function learnadapter() {
  const message = 'Learning Adapter';
  return message;
}

// Example 3: Advanced usage
class adapterExample {
  constructor() {
    this.topic = 'Adapter';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnadapter();
console.log(result);

const example = new adapterExample();
console.log(example.describe());

module.exports = { learnadapter, adapterExample };
