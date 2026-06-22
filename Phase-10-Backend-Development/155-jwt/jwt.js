// 155 - JWT
// ============================================

// Example 1: Basic jwt
console.log('=== JWT ===');

// Example 2: Practical implementation
function learnjwt() {
  const message = 'Learning JWT';
  return message;
}

// Example 3: Advanced usage
class jwtExample {
  constructor() {
    this.topic = 'JWT';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnjwt();
console.log(result);

const example = new jwtExample();
console.log(example.describe());

module.exports = { learnjwt, jwtExample };
