// 002 - Variables (var, let, const)
// ============================================

// Example 1: Basic variables
console.log('=== Variables (var, let, const) ===');

// Example 2: Practical implementation
function learnvariables() {
  const message = 'Learning Variables (var, let, const)';
  return message;
}

// Example 3: Advanced usage
class variablesExample {
  constructor() {
    this.topic = 'Variables (var, let, const)';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnvariables();
console.log(result);

const example = new variablesExample();
console.log(example.describe());

module.exports = { learnvariables, variablesExample };
