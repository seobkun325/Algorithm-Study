const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const caffein = input[1].split(" ").map(Number);

// 카페인 내림차순으로 정렬
caffein.sort((a, b) => b - a);
// DP 배열 생성
const dp = Array(K + 1).fill(Infinity);
dp[0] = 0;

for (let c of caffein) {
  for (let i = K; i >= 0; i--) {
    if (dp[i] !== Infinity) {
      if (i + c <= K) {
        dp[i + c] = Math.min(dp[i] + 1, dp[i + c]);
      }
    }
  }
}
if (dp[K] === Infinity) console.log(-1);
else console.log(dp[K]);
