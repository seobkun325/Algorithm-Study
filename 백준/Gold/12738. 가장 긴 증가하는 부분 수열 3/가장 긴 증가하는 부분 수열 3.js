const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

const dp = [arr[0]];

for (let i = 1; i < N; i++) {
  if (arr[i] > dp[dp.length - 1]) {
    dp.push(arr[i]);
  } else {
    const idx = binarySearch(arr[i], dp, 0, dp.length - 1);
    dp[idx] = arr[i];
  }
}
console.log(dp.length);

function binarySearch(value, dp, left, right) {
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (dp[mid] < value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}
