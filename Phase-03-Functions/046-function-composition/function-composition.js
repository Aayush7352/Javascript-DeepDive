// 046 - Function Composition
// ============================================

// Example 1: Basic function-composition
console.log('=== Function Composition ===');

// Example 2: Practical implementation
function learnfunctioncomposition() {
  const message = 'Learning Function Composition';
  return message;
}

// Example 3: Advanced usage
class functioncompositionExample {
  constructor() {
    this.topic = 'Function Composition';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnfunctioncomposition();
console.log(result);

const example = new functioncompositionExample();
console.log(example.describe());

module.exports = { learnfunctioncomposition, functioncompositionExample };
