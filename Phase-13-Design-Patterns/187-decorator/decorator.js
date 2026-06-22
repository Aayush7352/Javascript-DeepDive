// 187 - Decorator
// ============================================

// Example 1: Basic decorator
console.log('=== Decorator ===');

// Example 2: Practical implementation
function learndecorator() {
  const message = 'Learning Decorator';
  return message;
}

// Example 3: Advanced usage
class decoratorExample {
  constructor() {
    this.topic = 'Decorator';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learndecorator();
console.log(result);

const example = new decoratorExample();
console.log(example.describe());

module.exports = { learndecorator, decoratorExample };
