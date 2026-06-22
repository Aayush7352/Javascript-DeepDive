// 010 - Strict Mode
// ============================================

// Example 1: Basic strict-mode
console.log('=== Strict Mode ===');

// Example 2: Practical implementation
function learnstrictmode() {
  const message = 'Learning Strict Mode';
  return message;
}

// Example 3: Advanced usage
class strictmodeExample {
  constructor() {
    this.topic = 'Strict Mode';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnstrictmode();
console.log(result);

const example = new strictmodeExample();
console.log(example.describe());

module.exports = { learnstrictmode, strictmodeExample };
