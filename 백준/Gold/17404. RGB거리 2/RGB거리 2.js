const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const data = [];
for (let i = 1; i <= N; i++) {
  data.push(input[i].split(" ").map(Number));
}
let ans = Infinity;
for (let i = 0; i < 3; i++) {
  const dp = Array.from({ length: N }, () => Array(3).fill(Infinity));
  dp[0][(i + 1) % 3] = data[0][(i + 1) % 3];
  dp[0][(i + 2) % 3] = data[0][(i + 2) % 3];
  ans = Math.min(ans, solution(dp, i) + data[N - 1][i]);
}

console.log(ans);

function solution(dp, pickedNum) {
  for (let i = 1; i < N - 1; i++) {
    for (let j = 0; j < 3; j++) {
      dp[i][j] = data[i][j] + Math.min(dp[i - 1][(j + 1) % 3], dp[i - 1][(j + 2) % 3]);
    }
  }

  let tmpMin = Infinity;
  for (let j = 0; j < 3; j++) {
    if (j !== pickedNum) {
      tmpMin = Math.min(tmpMin, dp[N - 2][j]);
    }
  }
  return tmpMin;
}
