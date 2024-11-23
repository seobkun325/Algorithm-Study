const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const first = ["0", ...input[0].split("")];
const second = ["0", ...input[1].split("")];

let dp = Array.from({ length: first.length }, () => Array(second.length).fill(0));
for (let i = 1; i < first.length; i++) {
  for (let j = 1; j < second.length; j++) {
    if (first[i] === second[j]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}
console.log(dp[first.length - 1][second.length - 1]);
