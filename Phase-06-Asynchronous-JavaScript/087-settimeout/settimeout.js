// 087 - setTimeout
// ============================================

// Example 1: Basic settimeout
console.log('=== setTimeout ===');

// Example 2: Practical implementation
function learnsettimeout() {
  const message = 'Learning setTimeout';
  return message;
}

// Example 3: Advanced usage
class settimeoutExample {
  constructor() {
    this.topic = 'setTimeout';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnsettimeout();
console.log(result);

const example = new settimeoutExample();
console.log(example.describe());

module.exports = { learnsettimeout, settimeoutExample };
