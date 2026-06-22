// 203 - Build apply()
// ============================================

// Example 1: Basic build-apply
console.log('=== Build apply() ===');

// Example 2: Practical implementation
function learnbuildapply() {
  const message = 'Learning Build apply()';
  return message;
}

// Example 3: Advanced usage
class buildapplyExample {
  constructor() {
    this.topic = 'Build apply()';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnbuildapply();
console.log(result);

const example = new buildapplyExample();
console.log(example.describe());

module.exports = { learnbuildapply, buildapplyExample };
