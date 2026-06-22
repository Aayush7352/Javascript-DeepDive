// 029 - for of
// ============================================

// Example 1: Basic for-of
console.log('=== for of ===');

// Example 2: Practical implementation
function learnforof() {
  const message = 'Learning for of';
  return message;
}

// Example 3: Advanced usage
class forofExample {
  constructor() {
    this.topic = 'for of';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnforof();
console.log(result);

const example = new forofExample();
console.log(example.describe());

module.exports = { learnforof, forofExample };
