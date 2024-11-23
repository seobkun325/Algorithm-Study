const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

function binarySearch(list, left, right, value) {
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (list[mid] > value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

function pick(N, list) {
  const dp = [list[0]];
  for (let i = 1; i < N; i++) {
    if (dp[dp.length - 1] > list[i]) {
      dp.push(list[i]);
    } else {
      const idx = binarySearch(dp, 0, dp.length - 1, list[i]);
      dp[idx] = list[i];
    }
  }
  console.log(list.length - dp.length);
}

pick(N, arr);
