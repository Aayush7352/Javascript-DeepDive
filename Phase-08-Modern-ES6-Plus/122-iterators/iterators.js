// 122 - Iterators
// ============================================

// Example 1: Basic iterators
console.log('=== Iterators ===');

// Example 2: Practical implementation
function learniterators() {
  const message = 'Learning Iterators';
  return message;
}

// Example 3: Advanced usage
class iteratorsExample {
  constructor() {
    this.topic = 'Iterators';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learniterators();
console.log(result);

const example = new iteratorsExample();
console.log(example.describe());

module.exports = { learniterators, iteratorsExample };
