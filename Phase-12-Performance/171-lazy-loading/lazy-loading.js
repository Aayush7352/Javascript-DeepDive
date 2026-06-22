// 171 - Lazy Loading
// ============================================

// Example 1: Basic lazy-loading
console.log('=== Lazy Loading ===');

// Example 2: Practical implementation
function learnlazyloading() {
  const message = 'Learning Lazy Loading';
  return message;
}

// Example 3: Advanced usage
class lazyloadingExample {
  constructor() {
    this.topic = 'Lazy Loading';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnlazyloading();
console.log(result);

const example = new lazyloadingExample();
console.log(example.describe());

module.exports = { learnlazyloading, lazyloadingExample };
