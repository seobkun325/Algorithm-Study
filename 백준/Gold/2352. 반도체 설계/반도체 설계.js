const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const port = input[1].split(" ").map(Number);

function binarySearch(list, left, right, value) {
  let mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (list[mid] < value) {
      left = mid + 1;
    } else if (list[mid] > value) {
      right = mid;
    } else {
      return mid;
    }
  }
  return right;
}

function pick(N, port) {
  const dp = [port[0]];
  let idx = 0;
  for (let i = 1; i < N; i++) {
    if (port[i] > dp[idx]) {
      idx += 1;
      dp.push(port[i]);
    } else {
      const index = binarySearch(dp, 0, dp.length - 1, port[i]);
      dp[index] = port[i];
    }
  }
  console.log(dp.length);
}

pick(N, port);
