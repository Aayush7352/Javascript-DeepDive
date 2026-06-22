// 172 - Code Splitting
// ============================================

// Example 1: Basic code-splitting
console.log('=== Code Splitting ===');

// Example 2: Practical implementation
function learncodesplitting() {
  const message = 'Learning Code Splitting';
  return message;
}

// Example 3: Advanced usage
class codesplittingExample {
  constructor() {
    this.topic = 'Code Splitting';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncodesplitting();
console.log(result);

const example = new codesplittingExample();
console.log(example.describe());

module.exports = { learncodesplitting, codesplittingExample };
