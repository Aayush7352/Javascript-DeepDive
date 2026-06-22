// 185 - Strategy
// ============================================

// Example 1: Basic strategy
console.log('=== Strategy ===');

// Example 2: Practical implementation
function learnstrategy() {
  const message = 'Learning Strategy';
  return message;
}

// Example 3: Advanced usage
class strategyExample {
  constructor() {
    this.topic = 'Strategy';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnstrategy();
console.log(result);

const example = new strategyExample();
console.log(example.describe());

module.exports = { learnstrategy, strategyExample };
