// 084 - Web APIs
// ============================================

// Example 1: Basic web-apis
console.log('=== Web APIs ===');

// Example 2: Practical implementation
function learnwebapis() {
  const message = 'Learning Web APIs';
  return message;
}

// Example 3: Advanced usage
class webapisExample {
  constructor() {
    this.topic = 'Web APIs';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnwebapis();
console.log(result);

const example = new webapisExample();
console.log(example.describe());

module.exports = { learnwebapis, webapisExample };
