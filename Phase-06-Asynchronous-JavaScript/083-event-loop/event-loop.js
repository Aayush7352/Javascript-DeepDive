// 083 - Event Loop
// ============================================

// Example 1: Basic event-loop
console.log('=== Event Loop ===');

// Example 2: Practical implementation
function learneventloop() {
  const message = 'Learning Event Loop';
  return message;
}

// Example 3: Advanced usage
class eventloopExample {
  constructor() {
    this.topic = 'Event Loop';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learneventloop();
console.log(result);

const example = new eventloopExample();
console.log(example.describe());

module.exports = { learneventloop, eventloopExample };
