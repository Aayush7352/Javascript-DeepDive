// 027 - do while
// ============================================

// Example 1: Basic do-while
console.log('=== do while ===');

// Example 2: Practical implementation
function learndowhile() {
  const message = 'Learning do while';
  return message;
}

// Example 3: Advanced usage
class dowhileExample {
  constructor() {
    this.topic = 'do while';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learndowhile();
console.log(result);

const example = new dowhileExample();
console.log(example.describe());

module.exports = { learndowhile, dowhileExample };
