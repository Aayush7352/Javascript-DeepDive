// 163 - Jest
// ============================================

// Example 1: Basic jest
console.log('=== Jest ===');

// Example 2: Practical implementation
function learnjest() {
  const message = 'Learning Jest';
  return message;
}

// Example 3: Advanced usage
class jestExample {
  constructor() {
    this.topic = 'Jest';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnjest();
console.log(result);

const example = new jestExample();
console.log(example.describe());

module.exports = { learnjest, jestExample };
