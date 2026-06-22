// 057 - Constructor Functions
// ============================================

// Example 1: Basic constructor-functions
console.log('=== Constructor Functions ===');

// Example 2: Practical implementation
function learnconstructorfunctions() {
  const message = 'Learning Constructor Functions';
  return message;
}

// Example 3: Advanced usage
class constructorfunctionsExample {
  constructor() {
    this.topic = 'Constructor Functions';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnconstructorfunctions();
console.log(result);

const example = new constructorfunctionsExample();
console.log(example.describe());

module.exports = { learnconstructorfunctions, constructorfunctionsExample };
