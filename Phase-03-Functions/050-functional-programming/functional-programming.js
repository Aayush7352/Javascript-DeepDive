// 050 - Functional Programming Basics
// ============================================

// Example 1: Basic functional-programming
console.log('=== Functional Programming Basics ===');

// Example 2: Practical implementation
function learnfunctionalprogramming() {
  const message = 'Learning Functional Programming Basics';
  return message;
}

// Example 3: Advanced usage
class functionalprogrammingExample {
  constructor() {
    this.topic = 'Functional Programming Basics';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnfunctionalprogramming();
console.log(result);

const example = new functionalprogrammingExample();
console.log(example.describe());

module.exports = { learnfunctionalprogramming, functionalprogrammingExample };
