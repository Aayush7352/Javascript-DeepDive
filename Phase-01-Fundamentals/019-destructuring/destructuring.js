// 019 - Destructuring
// ============================================

// Example 1: Basic destructuring
console.log('=== Destructuring ===');

// Example 2: Practical implementation
function learndestructuring() {
  const message = 'Learning Destructuring';
  return message;
}

// Example 3: Advanced usage
class destructuringExample {
  constructor() {
    this.topic = 'Destructuring';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learndestructuring();
console.log(result);

const example = new destructuringExample();
console.log(example.describe());

module.exports = { learndestructuring, destructuringExample };
