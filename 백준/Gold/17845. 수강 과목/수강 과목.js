const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const timeTable = [];
for (let i = 1; i <= K; i++) {
  timeTable.push(input[i].split(" ").map(Number)); // [가치, 시간]
}
const dp = Array(N + 1).fill(0);

for (let i = 0; i < timeTable.length; i++) {
  for (let j = N; j >= timeTable[i][1]; j--) {
    dp[j] = Math.max(dp[j], dp[j - timeTable[i][1]] + timeTable[i][0]);
  }
}
console.log(dp[N]);
