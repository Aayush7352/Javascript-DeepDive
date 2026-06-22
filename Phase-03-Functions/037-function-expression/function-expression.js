// 037 - Function Expression
// ============================================

// Example 1: Basic function-expression
console.log('=== Function Expression ===');

// Example 2: Practical implementation
function learnfunctionexpression() {
  const message = 'Learning Function Expression';
  return message;
}

// Example 3: Advanced usage
class functionexpressionExample {
  constructor() {
    this.topic = 'Function Expression';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnfunctionexpression();
console.log(result);

const example = new functionexpressionExample();
console.log(example.describe());

module.exports = { learnfunctionexpression, functionexpressionExample };
