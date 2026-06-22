// 040 - Rest Parameters
// ============================================

// Example 1: Basic rest-parameters
console.log('=== Rest Parameters ===');

// Example 2: Practical implementation
function learnrestparameters() {
  const message = 'Learning Rest Parameters';
  return message;
}

// Example 3: Advanced usage
class restparametersExample {
  constructor() {
    this.topic = 'Rest Parameters';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnrestparameters();
console.log(result);

const example = new restparametersExample();
console.log(example.describe());

module.exports = { learnrestparameters, restparametersExample };
