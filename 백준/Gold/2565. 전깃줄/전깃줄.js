const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = [];
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}
arr.sort((a, b) => a[0] - b[0]);
let dp = [arr[0]];
for (let i = 1; i < N; i++) {
  if (dp[dp.length - 1][1] < arr[i][1]) {
    dp.push(arr[i]);
  } else {
    const idx = binarySearch(dp, arr[i][1]);
    dp[idx] = arr[i];
  }
}
console.log(N - dp.length);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid][1] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
