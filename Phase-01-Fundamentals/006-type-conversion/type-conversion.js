// 006 - Type Conversion
// ============================================

// Example 1: Basic type-conversion
console.log('=== Type Conversion ===');

// Example 2: Practical implementation
function learntypeconversion() {
  const message = 'Learning Type Conversion';
  return message;
}

// Example 3: Advanced usage
class typeconversionExample {
  constructor() {
    this.topic = 'Type Conversion';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learntypeconversion();
console.log(result);

const example = new typeconversionExample();
console.log(example.describe());

module.exports = { learntypeconversion, typeconversionExample };
