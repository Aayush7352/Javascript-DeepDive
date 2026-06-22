// 078 - WeakSet
// ============================================

// Example 1: Basic weakset
console.log('=== WeakSet ===');

// Example 2: Practical implementation
function learnweakset() {
  const message = 'Learning WeakSet';
  return message;
}

// Example 3: Advanced usage
class weaksetExample {
  constructor() {
    this.topic = 'WeakSet';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnweakset();
console.log(result);

const example = new weaksetExample();
console.log(example.describe());

module.exports = { learnweakset, weaksetExample };
