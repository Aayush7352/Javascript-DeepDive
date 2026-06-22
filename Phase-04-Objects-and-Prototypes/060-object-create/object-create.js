// 060 - Object.create()
// ============================================

// Example 1: Basic object-create
console.log('=== Object.create() ===');

// Example 2: Practical implementation
function learnobjectcreate() {
  const message = 'Learning Object.create()';
  return message;
}

// Example 3: Advanced usage
class objectcreateExample {
  constructor() {
    this.topic = 'Object.create()';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnobjectcreate();
console.log(result);

const example = new objectcreateExample();
console.log(example.describe());

module.exports = { learnobjectcreate, objectcreateExample };
