// 112 - Cookies
// ============================================

// Example 1: Basic cookies
console.log('=== Cookies ===');

// Example 2: Practical implementation
function learncookies() {
  const message = 'Learning Cookies';
  return message;
}

// Example 3: Advanced usage
class cookiesExample {
  constructor() {
    this.topic = 'Cookies';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncookies();
console.log(result);

const example = new cookiesExample();
console.log(example.describe());

module.exports = { learncookies, cookiesExample };
