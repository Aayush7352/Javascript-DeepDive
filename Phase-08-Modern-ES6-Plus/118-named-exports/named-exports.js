// 118 - Named Exports
// ============================================

// Example 1: Basic named-exports
console.log('=== Named Exports ===');

// Example 2: Practical implementation
function learnnamedexports() {
  const message = 'Learning Named Exports';
  return message;
}

// Example 3: Advanced usage
class namedexportsExample {
  constructor() {
    this.topic = 'Named Exports';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnnamedexports();
console.log(result);

const example = new namedexportsExample();
console.log(example.describe());

module.exports = { learnnamedexports, namedexportsExample };
