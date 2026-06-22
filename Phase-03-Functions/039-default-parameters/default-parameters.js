// 039 - Default Parameters
// ============================================

// Example 1: Basic default-parameters
console.log('=== Default Parameters ===');

// Example 2: Practical implementation
function learndefaultparameters() {
  const message = 'Learning Default Parameters';
  return message;
}

// Example 3: Advanced usage
class defaultparametersExample {
  constructor() {
    this.topic = 'Default Parameters';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learndefaultparameters();
console.log(result);

const example = new defaultparametersExample();
console.log(example.describe());

module.exports = { learndefaultparameters, defaultparametersExample };
