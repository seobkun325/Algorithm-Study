const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
const cumNumbers = [0];
for (let i = 0; i < N; i++) {
  cumNumbers.push(numbers[i] + cumNumbers[i]);
}
for (let i = 2; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(cumNumbers[b] - cumNumbers[a - 1]);
}
