// 183 - Builder
// ============================================

// Example 1: Basic builder
console.log('=== Builder ===');

// Example 2: Practical implementation
function learnbuilder() {
  const message = 'Learning Builder';
  return message;
}

// Example 3: Advanced usage
class builderExample {
  constructor() {
    this.topic = 'Builder';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnbuilder();
console.log(result);

const example = new builderExample();
console.log(example.describe());

module.exports = { learnbuilder, builderExample };
