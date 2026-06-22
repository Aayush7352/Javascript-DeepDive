// 149 - Routing
// ============================================

// Example 1: Basic routing
console.log('=== Routing ===');

// Example 2: Practical implementation
function learnrouting() {
  const message = 'Learning Routing';
  return message;
}

// Example 3: Advanced usage
class routingExample {
  constructor() {
    this.topic = 'Routing';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnrouting();
console.log(result);

const example = new routingExample();
console.log(example.describe());

module.exports = { learnrouting, routingExample };
