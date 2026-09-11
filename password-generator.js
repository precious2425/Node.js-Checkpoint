// Task 4: Generate a random password using the generate-password package
// npm install generate-password
const generator = require("generate-password");

const password = generator.generate({
  length: 12,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true,
  excludeSimilarCharacters: true,
});

console.log(password);
