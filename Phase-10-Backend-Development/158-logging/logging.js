// 158 - Logging
// ============================================

// Example 1: Basic logging
console.log('=== Logging ===');

// Example 2: Practical implementation
function learnlogging() {
  const message = 'Learning Logging';
  return message;
}

// Example 3: Advanced usage
class loggingExample {
  constructor() {
    this.topic = 'Logging';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnlogging();
console.log(result);

const example = new loggingExample();
console.log(example.describe());

module.exports = { learnlogging, loggingExample };
