// 012 - Block Scope
// ============================================

// Example 1: Basic block-scope
console.log('=== Block Scope ===');

// Example 2: Practical implementation
function learnblockscope() {
  const message = 'Learning Block Scope';
  return message;
}

// Example 3: Advanced usage
class blockscopeExample {
  constructor() {
    this.topic = 'Block Scope';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnblockscope();
console.log(result);

const example = new blockscopeExample();
console.log(example.describe());

module.exports = { learnblockscope, blockscopeExample };
