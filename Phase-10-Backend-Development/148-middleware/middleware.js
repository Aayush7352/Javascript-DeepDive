// 148 - Middleware
// ============================================

// Example 1: Basic middleware
console.log('=== Middleware ===');

// Example 2: Practical implementation
function learnmiddleware() {
  const message = 'Learning Middleware';
  return message;
}

// Example 3: Advanced usage
class middlewareExample {
  constructor() {
    this.topic = 'Middleware';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnmiddleware();
console.log(result);

const example = new middlewareExample();
console.log(example.describe());

module.exports = { learnmiddleware, middlewareExample };
