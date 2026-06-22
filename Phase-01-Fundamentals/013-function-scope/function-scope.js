// 013 - Function Scope
// ============================================

// Example 1: Basic function-scope
console.log('=== Function Scope ===');

// Example 2: Practical implementation
function learnfunctionscope() {
  const message = 'Learning Function Scope';
  return message;
}

// Example 3: Advanced usage
class functionscopeExample {
  constructor() {
    this.topic = 'Function Scope';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnfunctionscope();
console.log(result);

const example = new functionscopeExample();
console.log(example.describe());

module.exports = { learnfunctionscope, functionscopeExample };
