// 003 - Primitive Data Types
// ============================================

// Example 1: Basic primitive-data-types
console.log('=== Primitive Data Types ===');

// Example 2: Practical implementation
function learnprimitivedatatypes() {
  const message = 'Learning Primitive Data Types';
  return message;
}

// Example 3: Advanced usage
class primitivedatatypesExample {
  constructor() {
    this.topic = 'Primitive Data Types';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnprimitivedatatypes();
console.log(result);

const example = new primitivedatatypesExample();
console.log(example.describe());

module.exports = { learnprimitivedatatypes, primitivedatatypesExample };
