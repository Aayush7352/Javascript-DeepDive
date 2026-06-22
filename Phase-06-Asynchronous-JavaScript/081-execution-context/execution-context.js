// 081 - Execution Context
// ============================================

// Example 1: Basic execution-context
console.log('=== Execution Context ===');

// Example 2: Practical implementation
function learnexecutioncontext() {
  const message = 'Learning Execution Context';
  return message;
}

// Example 3: Advanced usage
class executioncontextExample {
  constructor() {
    this.topic = 'Execution Context';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnexecutioncontext();
console.log(result);

const example = new executioncontextExample();
console.log(example.describe());

module.exports = { learnexecutioncontext, executioncontextExample };
