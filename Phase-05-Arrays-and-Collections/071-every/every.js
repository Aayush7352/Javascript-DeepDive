// 071 - every()
// ============================================

// Example 1: Basic every
console.log('=== every() ===');

// Example 2: Practical implementation
function learnevery() {
  const message = 'Learning every()';
  return message;
}

// Example 3: Advanced usage
class everyExample {
  constructor() {
    this.topic = 'every()';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnevery();
console.log(result);

const example = new everyExample();
console.log(example.describe());

module.exports = { learnevery, everyExample };
