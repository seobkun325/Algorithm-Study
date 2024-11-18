const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let target = 1;
for (let i of arr) {
  if (i > target) {
    break;
  }
  target += i;
}
console.log(target);
