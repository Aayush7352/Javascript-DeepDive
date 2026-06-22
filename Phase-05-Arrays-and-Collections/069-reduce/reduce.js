// 069 - reduce()
// ============================================

// Example 1: Basic reduce
console.log('=== reduce() ===');

// Example 2: Practical implementation
function learnreduce() {
  const message = 'Learning reduce()';
  return message;
}

// Example 3: Advanced usage
class reduceExample {
  constructor() {
    this.topic = 'reduce()';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnreduce();
console.log(result);

const example = new reduceExample();
console.log(example.describe());

module.exports = { learnreduce, reduceExample };
