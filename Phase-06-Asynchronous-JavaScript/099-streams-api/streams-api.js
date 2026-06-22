// 099 - Streams API
// ============================================

// Example 1: Basic streams-api
console.log('=== Streams API ===');

// Example 2: Practical implementation
function learnstreamsapi() {
  const message = 'Learning Streams API';
  return message;
}

// Example 3: Advanced usage
class streamsapiExample {
  constructor() {
    this.topic = 'Streams API';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnstreamsapi();
console.log(result);

const example = new streamsapiExample();
console.log(example.describe());

module.exports = { learnstreamsapi, streamsapiExample };
