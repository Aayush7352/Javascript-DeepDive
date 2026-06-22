// 181 - Singleton
// ============================================

// Example 1: Basic singleton
console.log('=== Singleton ===');

// Example 2: Practical implementation
function learnsingleton() {
  const message = 'Learning Singleton';
  return message;
}

// Example 3: Advanced usage
class singletonExample {
  constructor() {
    this.topic = 'Singleton';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnsingleton();
console.log(result);

const example = new singletonExample();
console.log(example.describe());

module.exports = { learnsingleton, singletonExample };
