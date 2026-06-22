// 021 - if Statement
// ============================================

// Example 1: Basic if-statement
console.log('=== if Statement ===');

// Example 2: Practical implementation
function learnifstatement() {
  const message = 'Learning if Statement';
  return message;
}

// Example 3: Advanced usage
class ifstatementExample {
  constructor() {
    this.topic = 'if Statement';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnifstatement();
console.log(result);

const example = new ifstatementExample();
console.log(example.describe());

module.exports = { learnifstatement, ifstatementExample };
