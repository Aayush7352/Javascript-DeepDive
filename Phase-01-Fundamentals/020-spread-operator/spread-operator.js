// 020 - Spread Operator
// ============================================

// Example 1: Basic spread-operator
console.log('=== Spread Operator ===');

// Example 2: Practical implementation
function learnspreadoperator() {
  const message = 'Learning Spread Operator';
  return message;
}

// Example 3: Advanced usage
class spreadoperatorExample {
  constructor() {
    this.topic = 'Spread Operator';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnspreadoperator();
console.log(result);

const example = new spreadoperatorExample();
console.log(example.describe());

module.exports = { learnspreadoperator, spreadoperatorExample };
