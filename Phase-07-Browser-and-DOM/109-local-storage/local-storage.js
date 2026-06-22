// 109 - Local Storage
// ============================================

// Example 1: Basic local-storage
console.log('=== Local Storage ===');

// Example 2: Practical implementation
function learnlocalstorage() {
  const message = 'Learning Local Storage';
  return message;
}

// Example 3: Advanced usage
class localstorageExample {
  constructor() {
    this.topic = 'Local Storage';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnlocalstorage();
console.log(result);

const example = new localstorageExample();
console.log(example.describe());

module.exports = { learnlocalstorage, localstorageExample };
