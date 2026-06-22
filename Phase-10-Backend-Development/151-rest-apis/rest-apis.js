// 151 - REST APIs
// ============================================

// Example 1: Basic rest-apis
console.log('=== REST APIs ===');

// Example 2: Practical implementation
function learnrestapis() {
  const message = 'Learning REST APIs';
  return message;
}

// Example 3: Advanced usage
class restapisExample {
  constructor() {
    this.topic = 'REST APIs';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnrestapis();
console.log(result);

const example = new restapisExample();
console.log(example.describe());

module.exports = { learnrestapis, restapisExample };
