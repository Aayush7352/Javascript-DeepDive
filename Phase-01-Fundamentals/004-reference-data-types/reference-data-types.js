// 004 - Reference Data Types
// ============================================

// Example 1: Basic reference-data-types
console.log('=== Reference Data Types ===');

// Example 2: Practical implementation
function learnreferencedatatypes() {
  const message = 'Learning Reference Data Types';
  return message;
}

// Example 3: Advanced usage
class referencedatatypesExample {
  constructor() {
    this.topic = 'Reference Data Types';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnreferencedatatypes();
console.log(result);

const example = new referencedatatypesExample();
console.log(example.describe());

module.exports = { learnreferencedatatypes, referencedatatypesExample };
