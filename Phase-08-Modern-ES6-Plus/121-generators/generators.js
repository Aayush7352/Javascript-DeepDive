// 121 - Generators
// ============================================

// Example 1: Basic generators
console.log('=== Generators ===');

// Example 2: Practical implementation
function learngenerators() {
  const message = 'Learning Generators';
  return message;
}

// Example 3: Advanced usage
class generatorsExample {
  constructor() {
    this.topic = 'Generators';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learngenerators();
console.log(result);

const example = new generatorsExample();
console.log(example.describe());

module.exports = { learngenerators, generatorsExample };
