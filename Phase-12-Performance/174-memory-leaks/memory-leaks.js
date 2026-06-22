// 174 - Memory Leaks
// ============================================

// Example 1: Basic memory-leaks
console.log('=== Memory Leaks ===');

// Example 2: Practical implementation
function learnmemoryleaks() {
  const message = 'Learning Memory Leaks';
  return message;
}

// Example 3: Advanced usage
class memoryleaksExample {
  constructor() {
    this.topic = 'Memory Leaks';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnmemoryleaks();
console.log(result);

const example = new memoryleaksExample();
console.log(example.describe());

module.exports = { learnmemoryleaks, memoryleaksExample };
