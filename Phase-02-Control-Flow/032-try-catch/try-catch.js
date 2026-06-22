// 032 - try catch
// ============================================

// Example 1: Basic try-catch
console.log('=== try catch ===');

// Example 2: Practical implementation
function learntrycatch() {
  const message = 'Learning try catch';
  return message;
}

// Example 3: Advanced usage
class trycatchExample {
  constructor() {
    this.topic = 'try catch';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learntrycatch();
console.log(result);

const example = new trycatchExample();
console.log(example.describe());

module.exports = { learntrycatch, trycatchExample };
