// 058 - Prototype
// ============================================

// Example 1: Basic prototype
console.log('=== Prototype ===');

// Example 2: Practical implementation
function learnprototype() {
  const message = 'Learning Prototype';
  return message;
}

// Example 3: Advanced usage
class prototypeExample {
  constructor() {
    this.topic = 'Prototype';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnprototype();
console.log(result);

const example = new prototypeExample();
console.log(example.describe());

module.exports = { learnprototype, prototypeExample };
