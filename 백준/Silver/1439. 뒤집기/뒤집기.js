const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("").map(Number);
let cnt = 1;
for (let i = 1; i < input.length; i++) {
  if (input[i] !== input[i - 1]) cnt++;
}
console.log(Math.floor(cnt / 2));
