const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const grid = [];
for (let i = 1; i <= N; i++) {
  grid.push(input[i].split(""));
}
// console.log(grid);

// 0 : 아직 미탐색. 1 : 출구와 이어짐, -1 : 출구와 이어지지않음.
const visited = Array.from({ length: N }, () => Array(M).fill(0));

const directions = {
  U: [-1, 0],
  D: [1, 0],
  R: [0, 1],
  L: [0, -1],
};

function dfs(x, y) {
  if (visited[x][y] === 1) return true;
  if (visited[x][y] === -1) return false;

  visited[x][y] = -1;

  const [dx, dy] = directions[grid[x][y]];
  const [nx, ny] = [x + dx, y + dy];

  if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
    visited[x][y] = 1;
    return true;
  }

  if (dfs(nx, ny)) {
    visited[x][y] = 1;
    return true;
  }

  visited[x][y] = -1;
  return false;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j] === 0) {
      dfs(i, j);
    }
  }
}

let ans = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (visited[i][j] === 1) ans++;
  }
}

console.log(ans);
