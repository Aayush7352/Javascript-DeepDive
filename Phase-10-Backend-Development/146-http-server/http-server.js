// 146 - HTTP Server
// ============================================

// Example 1: Basic http-server
console.log('=== HTTP Server ===');

// Example 2: Practical implementation
function learnhttpserver() {
  const message = 'Learning HTTP Server';
  return message;
}

// Example 3: Advanced usage
class httpserverExample {
  constructor() {
    this.topic = 'HTTP Server';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnhttpserver();
console.log(result);

const example = new httpserverExample();
console.log(example.describe());

module.exports = { learnhttpserver, httpserverExample };
