// 036 - Function Declaration
// ============================================

// Example 1: Basic function-declaration
console.log('=== Function Declaration ===');

// Example 2: Practical implementation
function learnfunctiondeclaration() {
  const message = 'Learning Function Declaration';
  return message;
}

// Example 3: Advanced usage
class functiondeclarationExample {
  constructor() {
    this.topic = 'Function Declaration';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnfunctiondeclaration();
console.log(result);

const example = new functiondeclarationExample();
console.log(example.describe());

module.exports = { learnfunctiondeclaration, functiondeclarationExample };
