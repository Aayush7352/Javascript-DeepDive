// 102 - DOM Selection
// ============================================

// Example 1: Basic dom-selection
console.log('=== DOM Selection ===');

// Example 2: Practical implementation
function learndomselection() {
  const message = 'Learning DOM Selection';
  return message;
}

// Example 3: Advanced usage
class domselectionExample {
  constructor() {
    this.topic = 'DOM Selection';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learndomselection();
console.log(result);

const example = new domselectionExample();
console.log(example.describe());

module.exports = { learndomselection, domselectionExample };
