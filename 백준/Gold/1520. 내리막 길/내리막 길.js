const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const grid = [];
for (let i = 1; i <= N; i++) {
  const tmp = input[i].split(" ").map(Number);
  grid.push(tmp);
}

const dp = Array.from({ length: N }, () => Array(M).fill(-1));
const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

function dfs(ci, cj) {
  if (ci === N - 1 && cj === M - 1) {
    return 1;
  }

  if (dp[ci][cj] !== -1) {
    return dp[ci][cj];
  }

  let ways = 0;
  for (let [di, dj] of direction) {
    const [ni, nj] = [ci + di, cj + dj];
    if (0 <= ni && ni < N && 0 <= nj && nj < M && grid[ci][cj] > grid[ni][nj]) {
      ways += dfs(ni, nj);
    }
  }
  dp[ci][cj] = ways;
  return dp[ci][cj];
}

console.log(dfs(0, 0));
