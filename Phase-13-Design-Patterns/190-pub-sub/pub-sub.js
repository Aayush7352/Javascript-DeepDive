// 190 - Pub/Sub
// ============================================

// Example 1: Basic pub-sub
console.log('=== Pub/Sub ===');

// Example 2: Practical implementation
function learnpubsub() {
  const message = 'Learning Pub/Sub';
  return message;
}

// Example 3: Advanced usage
class pubsubExample {
  constructor() {
    this.topic = 'Pub/Sub';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnpubsub();
console.log(result);

const example = new pubsubExample();
console.log(example.describe());

module.exports = { learnpubsub, pubsubExample };
