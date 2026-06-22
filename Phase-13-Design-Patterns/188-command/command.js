// 188 - Command
// ============================================

// Example 1: Basic command
console.log('=== Command ===');

// Example 2: Practical implementation
function learncommand() {
  const message = 'Learning Command';
  return message;
}

// Example 3: Advanced usage
class commandExample {
  constructor() {
    this.topic = 'Command';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learncommand();
console.log(result);

const example = new commandExample();
console.log(example.describe());

module.exports = { learncommand, commandExample };
