// 030 - break
// ============================================

// Example 1: Basic break
console.log('=== break ===');

// Example 2: Practical implementation
function learnbreak() {
  const message = 'Learning break';
  return message;
}

// Example 3: Advanced usage
class breakExample {
  constructor() {
    this.topic = 'break';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnbreak();
console.log(result);

const example = new breakExample();
console.log(example.describe());

module.exports = { learnbreak, breakExample };
