// 107 - Event Delegation
// ============================================

// Example 1: Basic event-delegation
console.log('=== Event Delegation ===');

// Example 2: Practical implementation
function learneventdelegation() {
  const message = 'Learning Event Delegation';
  return message;
}

// Example 3: Advanced usage
class eventdelegationExample {
  constructor() {
    this.topic = 'Event Delegation';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learneventdelegation();
console.log(result);

const example = new eventdelegationExample();
console.log(example.describe());

module.exports = { learneventdelegation, eventdelegationExample };
