// 048 - Recursion
// ============================================

// Example 1: Basic recursion
console.log('=== Recursion ===');

// Example 2: Practical implementation
function learnrecursion() {
  const message = 'Learning Recursion';
  return message;
}

// Example 3: Advanced usage
class recursionExample {
  constructor() {
    this.topic = 'Recursion';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnrecursion();
console.log(result);

const example = new recursionExample();
console.log(example.describe());

module.exports = { learnrecursion, recursionExample };
