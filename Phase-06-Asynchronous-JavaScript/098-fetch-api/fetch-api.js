// 098 - Fetch API
// ============================================

// Example 1: Basic fetch-api
console.log('=== Fetch API ===');

// Example 2: Practical implementation
function learnfetchapi() {
  const message = 'Learning Fetch API';
  return message;
}

// Example 3: Advanced usage
class fetchapiExample {
  constructor() {
    this.topic = 'Fetch API';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnfetchapi();
console.log(result);

const example = new fetchapiExample();
console.log(example.describe());

module.exports = { learnfetchapi, fetchapiExample };
