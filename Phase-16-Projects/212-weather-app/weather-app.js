// 212 - Weather App
// ============================================

// Example 1: Basic weather-app
console.log('=== Weather App ===');

// Example 2: Practical implementation
function learnweatherapp() {
  const message = 'Learning Weather App';
  return message;
}

// Example 3: Advanced usage
class weatherappExample {
  constructor() {
    this.topic = 'Weather App';
  }

  describe() {
    return `This topic covers: ${this.topic}`;
  }
}

// Run examples
const result = learnweatherapp();
console.log(result);

const example = new weatherappExample();
console.log(example.describe());

module.exports = { learnweatherapp, weatherappExample };
