// 051 - Object Literals
// ============================================

// Example 1: Basic object-literals
console.log('=== Object Literals ===');

// Example 2: Practical implementation
function learnobjectliterals() {
  const message = 'Learning Object Literals';
  return message;
}

// Example 3: Advanced usage
class objectliteralsExample {
  constructor() {
    this.topic = 'Object Literals';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnobjectliterals();
console.log(result);

const example = new objectliteralsExample();
console.log(example.describe());

module.exports = { learnobjectliterals, objectliteralsExample };
