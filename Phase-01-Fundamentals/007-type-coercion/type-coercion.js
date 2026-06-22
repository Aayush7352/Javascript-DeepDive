// 007 - Type Coercion
// ============================================

// Example 1: Basic type-coercion
console.log('=== Type Coercion ===');

// Example 2: Practical implementation
function learntypecoercion() {
  const message = 'Learning Type Coercion';
  return message;
}

// Example 3: Advanced usage
class typecoercionExample {
  constructor() {
    this.topic = 'Type Coercion';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learntypecoercion();
console.log(result);

const example = new typecoercionExample();
console.log(example.describe());

module.exports = { learntypecoercion, typecoercionExample };
