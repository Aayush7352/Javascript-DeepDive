// 173 - Tree Shaking
// ============================================

// Example 1: Basic tree-shaking
console.log('=== Tree Shaking ===');

// Example 2: Practical implementation
function learntreeshaking() {
  const message = 'Learning Tree Shaking';
  return message;
}

// Example 3: Advanced usage
class treeshakingExample {
  constructor() {
    this.topic = 'Tree Shaking';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learntreeshaking();
console.log(result);

const example = new treeshakingExample();
console.log(example.describe());

module.exports = { learntreeshaking, treeshakingExample };
