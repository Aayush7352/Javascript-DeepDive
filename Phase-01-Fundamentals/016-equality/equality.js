// 016 - Equality (== vs ===)
// ============================================

// Example 1: Basic equality
console.log('=== Equality (== vs ===) ===');

// Example 2: Practical implementation
function learnequality() {
  const message = 'Learning Equality (== vs ===)';
  return message;
}

// Example 3: Advanced usage
class equalityExample {
  constructor() {
    this.topic = 'Equality (== vs ===)';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnequality();
console.log(result);

const example = new equalityExample();
console.log(example.describe());

module.exports = { learnequality, equalityExample };
