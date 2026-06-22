// 175 - Garbage Collection
// ============================================

// Example 1: Basic garbage-collection
console.log('=== Garbage Collection ===');

// Example 2: Practical implementation
function learngarbagecollection() {
  const message = 'Learning Garbage Collection';
  return message;
}

// Example 3: Advanced usage
class garbagecollectionExample {
  constructor() {
    this.topic = 'Garbage Collection';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learngarbagecollection();
console.log(result);

const example = new garbagecollectionExample();
console.log(example.describe());

module.exports = { learngarbagecollection, garbagecollectionExample };
