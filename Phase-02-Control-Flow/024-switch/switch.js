// 024 - switch
// ============================================

// Example 1: Basic switch
console.log('=== switch ===');

// Example 2: Practical implementation
function learnswitch() {
  const message = 'Learning switch';
  return message;
}

// Example 3: Advanced usage
class switchExample {
  constructor() {
    this.topic = 'switch';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnswitch();
console.log(result);

const example = new switchExample();
console.log(example.describe());

module.exports = { learnswitch, switchExample };
