// 055 - Apply
// ============================================

// Example 1: Basic apply
console.log('=== Apply ===');

// Example 2: Practical implementation
function learnapply() {
  const message = 'Learning Apply';
  return message;
}

// Example 3: Advanced usage
class applyExample {
  constructor() {
    this.topic = 'Apply';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnapply();
console.log(result);

const example = new applyExample();
console.log(example.describe());

module.exports = { learnapply, applyExample };
