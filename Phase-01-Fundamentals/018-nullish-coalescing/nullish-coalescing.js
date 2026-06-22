// 018 - Nullish Coalescing
// ============================================

// Example 1: Basic nullish-coalescing
console.log('=== Nullish Coalescing ===');

// Example 2: Practical implementation
function learnnullishcoalescing() {
  const message = 'Learning Nullish Coalescing';
  return message;
}

// Example 3: Advanced usage
class nullishcoalescingExample {
  constructor() {
    this.topic = 'Nullish Coalescing';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnnullishcoalescing();
console.log(result);

const example = new nullishcoalescingExample();
console.log(example.describe());

module.exports = { learnnullishcoalescing, nullishcoalescingExample };
