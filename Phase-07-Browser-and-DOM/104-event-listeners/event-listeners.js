// 104 - Event Listeners
// ============================================

// Example 1: Basic event-listeners
console.log('=== Event Listeners ===');

// Example 2: Practical implementation
function learneventlisteners() {
  const message = 'Learning Event Listeners';
  return message;
}

// Example 3: Advanced usage
class eventlistenersExample {
  constructor() {
    this.topic = 'Event Listeners';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learneventlisteners();
console.log(result);

const example = new eventlistenersExample();
console.log(example.describe());

module.exports = { learneventlisteners, eventlistenersExample };
