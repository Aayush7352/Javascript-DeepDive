// 059 - Prototype Chain
// ============================================

// Example 1: Basic prototype-chain
console.log('=== Prototype Chain ===');

// Example 2: Practical implementation
function learnprototypechain() {
  const message = 'Learning Prototype Chain';
  return message;
}

// Example 3: Advanced usage
class prototypechainExample {
  constructor() {
    this.topic = 'Prototype Chain';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnprototypechain();
console.log(result);

const example = new prototypechainExample();
console.log(example.describe());

module.exports = { learnprototypechain, prototypechainExample };
