const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const Arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < Arr.length; i++) {
  answer += findNumber(Arr[i], i);
}
console.log(answer);
function findNumber(num, idx) {
  let left = 0;
  let right = N - 1;

  while (left < right) {
    if (left === idx) left++;
    if (right === idx) right--;
    if (left >= right) return 0;
    if (Arr[left] + Arr[right] === num) return 1;
    else if (Arr[left] + Arr[right] < num) left++;
    else right--;
  }
  return 0;
}
