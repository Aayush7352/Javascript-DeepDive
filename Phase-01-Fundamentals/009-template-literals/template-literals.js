// 009 - Template Literals
// ============================================

// Example 1: Basic template-literals
console.log('=== Template Literals ===');

// Example 2: Practical implementation
function learntemplateliterals() {
  const message = 'Learning Template Literals';
  return message;
}

// Example 3: Advanced usage
class templateliteralsExample {
  constructor() {
    this.topic = 'Template Literals';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learntemplateliterals();
console.log(result);

const example = new templateliteralsExample();
console.log(example.describe());

module.exports = { learntemplateliterals, templateliteralsExample };
