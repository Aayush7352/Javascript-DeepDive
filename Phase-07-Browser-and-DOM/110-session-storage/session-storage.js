// 110 - Session Storage
// ============================================

// Example 1: Basic session-storage
console.log('=== Session Storage ===');

// Example 2: Practical implementation
function learnsessionstorage() {
  const message = 'Learning Session Storage';
  return message;
}

// Example 3: Advanced usage
class sessionstorageExample {
  constructor() {
    this.topic = 'Session Storage';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnsessionstorage();
console.log(result);

const example = new sessionstorageExample();
console.log(example.describe());

module.exports = { learnsessionstorage, sessionstorageExample };
