// 044 - Lexical Scope
// ============================================

// Example 1: Basic lexical-scope
console.log('=== Lexical Scope ===');

// Example 2: Practical implementation
function learnlexicalscope() {
  const message = 'Learning Lexical Scope';
  return message;
}

// Example 3: Advanced usage
class lexicalscopeExample {
  constructor() {
    this.topic = 'Lexical Scope';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnlexicalscope();
console.log(result);

const example = new lexicalscopeExample();
console.log(example.describe());

module.exports = { learnlexicalscope, lexicalscopeExample };
