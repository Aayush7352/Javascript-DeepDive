// 053 - this Keyword
// ============================================

// Example 1: Basic this-keyword
console.log('=== this Keyword ===');

// Example 2: Practical implementation
function learnthiskeyword() {
  const message = 'Learning this Keyword';
  return message;
}

// Example 3: Advanced usage
class thiskeywordExample {
  constructor() {
    this.topic = 'this Keyword';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnthiskeyword();
console.log(result);

const example = new thiskeywordExample();
console.log(example.describe());

module.exports = { learnthiskeyword, thiskeywordExample };
