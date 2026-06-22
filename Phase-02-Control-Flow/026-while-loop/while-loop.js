// 026 - while Loop
// ============================================

// Example 1: Basic while-loop
console.log('=== while Loop ===');

// Example 2: Practical implementation
function learnwhileloop() {
  const message = 'Learning while Loop';
  return message;
}

// Example 3: Advanced usage
class whileloopExample {
  constructor() {
    this.topic = 'while Loop';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnwhileloop();
console.log(result);

const example = new whileloopExample();
console.log(example.describe());

module.exports = { learnwhileloop, whileloopExample };
