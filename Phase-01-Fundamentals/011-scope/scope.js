// 011 - Scope
// ============================================

// Example 1: Basic scope
console.log('=== Scope ===');

// Example 2: Practical implementation
function learnscope() {
  const message = 'Learning Scope';
  return message;
}

// Example 3: Advanced usage
class scopeExample {
  constructor() {
    this.topic = 'Scope';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnscope();
console.log(result);

const example = new scopeExample();
console.log(example.describe());

module.exports = { learnscope, scopeExample };
