// 129 - Intl API
// ============================================

// Example 1: Basic intl-api
console.log('=== Intl API ===');

// Example 2: Practical implementation
function learnintlapi() {
  const message = 'Learning Intl API';
  return message;
}

// Example 3: Advanced usage
class intlapiExample {
  constructor() {
    this.topic = 'Intl API';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnintlapi();
console.log(result);

const example = new intlapiExample();
console.log(example.describe());

module.exports = { learnintlapi, intlapiExample };
