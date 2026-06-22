// 202 - Build call()
// ============================================

// Example 1: Basic build-call
console.log('=== Build call() ===');

// Example 2: Practical implementation
function learnbuildcall() {
  const message = 'Learning Build call()';
  return message;
}

// Example 3: Advanced usage
class buildcallExample {
  constructor() {
    this.topic = 'Build call()';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnbuildcall();
console.log(result);

const example = new buildcallExample();
console.log(example.describe());

module.exports = { learnbuildcall, buildcallExample };
