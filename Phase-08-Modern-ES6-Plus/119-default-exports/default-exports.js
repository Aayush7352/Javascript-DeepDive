// 119 - Default Exports
// ============================================

// Example 1: Basic default-exports
console.log('=== Default Exports ===');

// Example 2: Practical implementation
function learndefaultexports() {
  const message = 'Learning Default Exports';
  return message;
}

// Example 3: Advanced usage
class defaultexportsExample {
  constructor() {
    this.topic = 'Default Exports';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learndefaultexports();
console.log(result);

const example = new defaultexportsExample();
console.log(example.describe());

module.exports = { learndefaultexports, defaultexportsExample };
