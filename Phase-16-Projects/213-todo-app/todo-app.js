// 213 - Todo App
// ============================================

// Example 1: Basic todo-app
console.log('=== Todo App ===');

// Example 2: Practical implementation
function learntodoapp() {
  const message = 'Learning Todo App';
  return message;
}

// Example 3: Advanced usage
class todoappExample {
  constructor() {
    this.topic = 'Todo App';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learntodoapp();
console.log(result);

const example = new todoappExample();
console.log(example.describe());

module.exports = { learntodoapp, todoappExample };
