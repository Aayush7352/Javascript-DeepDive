// 008 - Truthy and Falsy Values
// ============================================

// Example 1: Basic truthy-falsy
console.log('=== Truthy and Falsy Values ===');

// Example 2: Practical implementation
function learntruthyfalsy() {
  const message = 'Learning Truthy and Falsy Values';
  return message;
}

// Example 3: Advanced usage
class truthyfalsyExample {
  constructor() {
    this.topic = 'Truthy and Falsy Values';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learntruthyfalsy();
console.log(result);

const example = new truthyfalsyExample();
console.log(example.describe());

module.exports = { learntruthyfalsy, truthyfalsyExample };
