// 184 - Observer
// ============================================

// Example 1: Basic observer
console.log('=== Observer ===');

// Example 2: Practical implementation
function learnobserver() {
  const message = 'Learning Observer';
  return message;
}

// Example 3: Advanced usage
class observerExample {
  constructor() {
    this.topic = 'Observer';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnobserver();
console.log(result);

const example = new observerExample();
console.log(example.describe());

module.exports = { learnobserver, observerExample };
