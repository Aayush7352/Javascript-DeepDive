// 127 - Mixins
// ============================================

// Example 1: Basic mixins
console.log('=== Mixins ===');

// Example 2: Practical implementation
function learnmixins() {
  const message = 'Learning Mixins';
  return message;
}

// Example 3: Advanced usage
class mixinsExample {
  constructor() {
    this.topic = 'Mixins';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnmixins();
console.log(result);

const example = new mixinsExample();
console.log(example.describe());

module.exports = { learnmixins, mixinsExample };
