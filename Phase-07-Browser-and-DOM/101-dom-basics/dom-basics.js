// 101 - DOM Basics
// ============================================

// Example 1: Basic dom-basics
console.log('=== DOM Basics ===');

// Example 2: Practical implementation
function learndombasics() {
  const message = 'Learning DOM Basics';
  return message;
}

// Example 3: Advanced usage
class dombasicsExample {
  constructor() {
    this.topic = 'DOM Basics';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learndombasics();
console.log(result);

const example = new dombasicsExample();
console.log(example.describe());

module.exports = { learndombasics, dombasicsExample };
