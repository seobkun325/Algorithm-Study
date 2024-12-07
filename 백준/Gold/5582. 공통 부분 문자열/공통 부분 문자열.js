const fs = require("fs");
const [str1, str2] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));

let answer = 0;
for (let i = 0; i < str1.length; i++) {
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      dp[i + 1][j + 1] = dp[i][j] + 1;
      answer = Math.max(answer, dp[i + 1][j + 1]);
    }
  }
}

console.log(answer);
