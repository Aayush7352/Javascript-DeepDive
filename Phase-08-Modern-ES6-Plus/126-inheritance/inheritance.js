// 126 - Inheritance
// ============================================

// Example 1: Basic inheritance
console.log('=== Inheritance ===');

// Example 2: Practical implementation
function learninheritance() {
  const message = 'Learning Inheritance';
  return message;
}

// Example 3: Advanced usage
class inheritanceExample {
  constructor() {
    this.topic = 'Inheritance';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learninheritance();
console.log(result);

const example = new inheritanceExample();
console.log(example.describe());

module.exports = { learninheritance, inheritanceExample };
