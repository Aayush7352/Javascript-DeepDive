// 106 - Event Capturing
// ============================================

// Example 1: Basic event-capturing
console.log('=== Event Capturing ===');

// Example 2: Practical implementation
function learneventcapturing() {
  const message = 'Learning Event Capturing';
  return message;
}

// Example 3: Advanced usage
class eventcapturingExample {
  constructor() {
    this.topic = 'Event Capturing';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learneventcapturing();
console.log(result);

const example = new eventcapturingExample();
console.log(example.describe());

module.exports = { learneventcapturing, eventcapturingExample };
