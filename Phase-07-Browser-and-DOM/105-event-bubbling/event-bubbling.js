// 105 - Event Bubbling
// ============================================

// Example 1: Basic event-bubbling
console.log('=== Event Bubbling ===');

// Example 2: Practical implementation
function learneventbubbling() {
  const message = 'Learning Event Bubbling';
  return message;
}

// Example 3: Advanced usage
class eventbubblingExample {
  constructor() {
    this.topic = 'Event Bubbling';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learneventbubbling();
console.log(result);

const example = new eventbubblingExample();
console.log(example.describe());

module.exports = { learneventbubbling, eventbubblingExample };
