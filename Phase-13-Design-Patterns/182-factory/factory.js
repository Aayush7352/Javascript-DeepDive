// 182 - Factory
// ============================================

// Example 1: Basic factory
console.log('=== Factory ===');

// Example 2: Practical implementation
function learnfactory() {
  const message = 'Learning Factory';
  return message;
}

// Example 3: Advanced usage
class factoryExample {
  constructor() {
    this.topic = 'Factory';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnfactory();
console.log(result);

const example = new factoryExample();
console.log(example.describe());

module.exports = { learnfactory, factoryExample };
