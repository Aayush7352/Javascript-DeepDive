// 123 - Classes
// ============================================

// Example 1: Basic classes
console.log('=== Classes ===');

// Example 2: Practical implementation
function learnclasses() {
  const message = 'Learning Classes';
  return message;
}

// Example 3: Advanced usage
class classesExample {
  constructor() {
    this.topic = 'Classes';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnclasses();
console.log(result);

const example = new classesExample();
console.log(example.describe());

module.exports = { learnclasses, classesExample };
