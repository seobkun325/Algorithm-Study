const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);
for (let i = 0; i < T; i++) {
  const N = Number(input[i * 3 + 1]);
  const coin = input[i * 3 + 2].split(" ").map(Number);
  const value = Number(input[i * 3 + 3]);

  //
  const dp = Array(value + 1).fill(0);
  dp[0] = 1;
  for (let j = 0; j < coin.length; j++) {
    for (let k = coin[j]; k <= value; k++) {
      dp[k] = dp[k] + dp[k - coin[j]];
    }
  }
  console.log(dp[value]);
}
