const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
let chosen = [];
for (let i = 0; i < arr.length; i++) {
  let left = i + 1;
  let right = arr.length - 1;
  if (i === 0) {
    chosen = [arr[i], arr[left], arr[right]];
  }
  while (left < right) {
    if (Math.abs(arr[i] + arr[left] + arr[right]) < Math.abs(chosen[0] + chosen[1] + chosen[2])) {
      chosen = [arr[i], arr[left], arr[right]];
    }
    if (arr[i] + arr[left] + arr[right] < 0) {
      left++;
    } else if (arr[i] + arr[left] + arr[right] > 0) {
      right--;
    } else {
      break;
    }
  }
}
console.log(chosen.join(" "));
