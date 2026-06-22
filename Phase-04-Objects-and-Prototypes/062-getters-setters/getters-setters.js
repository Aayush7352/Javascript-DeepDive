// 062 - Getters and Setters
// ============================================

// Example 1: Basic getters-setters
console.log('=== Getters and Setters ===');

// Example 2: Practical implementation
function learngetterssetters() {
  const message = 'Learning Getters and Setters';
  return message;
}

// Example 3: Advanced usage
class getterssettersExample {
  constructor() {
    this.topic = 'Getters and Setters';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learngetterssetters();
console.log(result);

const example = new getterssettersExample();
console.log(example.describe());

module.exports = { learngetterssetters, getterssettersExample };
