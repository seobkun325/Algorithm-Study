const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("-");
let answer = 0;
for (let i = 0; i < input.length; i++) {
  const newInput = input[i].split("+").map(Number);
  const tmp = newInput.reduce((a, b) => a + b, 0);
  if (i === 0) {
    answer = tmp;
  } else answer -= tmp;
}
console.log(answer);
