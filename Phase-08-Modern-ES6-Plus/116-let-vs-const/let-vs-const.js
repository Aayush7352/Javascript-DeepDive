// 116 - let vs const
// ============================================

// Example 1: Basic let-vs-const
console.log('=== let vs const ===');

// Example 2: Practical implementation
function learnletvsconst() {
  const message = 'Learning let vs const';
  return message;
}

// Example 3: Advanced usage
class letvsconstExample {
  constructor() {
    this.topic = 'let vs const';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnletvsconst();
console.log(result);

const example = new letvsconstExample();
console.log(example.describe());

module.exports = { learnletvsconst, letvsconstExample };
