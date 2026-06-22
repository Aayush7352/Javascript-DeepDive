// 133 - ES Modules
// ============================================

// Example 1: Basic es-modules
console.log('=== ES Modules ===');

// Example 2: Practical implementation
function learnesmodules() {
  const message = 'Learning ES Modules';
  return message;
}

// Example 3: Advanced usage
class esmodulesExample {
  constructor() {
    this.topic = 'ES Modules';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnesmodules();
console.log(result);

const example = new esmodulesExample();
console.log(example.describe());

module.exports = { learnesmodules, esmodulesExample };
