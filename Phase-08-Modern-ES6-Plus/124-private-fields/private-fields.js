// 124 - Private Fields
// ============================================

// Example 1: Basic private-fields
console.log('=== Private Fields ===');

// Example 2: Practical implementation
function learnprivatefields() {
  const message = 'Learning Private Fields';
  return message;
}

// Example 3: Advanced usage
class privatefieldsExample {
  constructor() {
    this.topic = 'Private Fields';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnprivatefields();
console.log(result);

const example = new privatefieldsExample();
console.log(example.describe());

module.exports = { learnprivatefields, privatefieldsExample };
