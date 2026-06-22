// 043 - Closures
// ============================================

// Example 1: Basic closures
console.log('=== Closures ===');

// Example 2: Practical implementation
function learnclosures() {
  const message = 'Learning Closures';
  return message;
}

// Example 3: Advanced usage
class closuresExample {
  constructor() {
    this.topic = 'Closures';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnclosures();
console.log(result);

const example = new closuresExample();
console.log(example.describe());

module.exports = { learnclosures, closuresExample };
