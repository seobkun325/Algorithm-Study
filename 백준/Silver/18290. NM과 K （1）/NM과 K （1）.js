const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, K] = input[0].split(" ").map(Number);
const grid = [];
for (let i = 1; i <= N; i++) {
  grid.push(input[i].split(" ").map(Number));
}

let answer = -Infinity;
const visited = Array.from({ length: N }, () => Array(M).fill(false));

backTracking(0, 0, 0);
console.log(answer);

function backTracking(count, currentSum, start) {
  if (count === K) {
    answer = Math.max(answer, currentSum);
    return;
  }

  for (let i = start; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] === false) {
        const blocked = [];
        for (let [di, dj] of [
          [1, 0],
          [0, 1],
          [-1, 0],
          [0, -1],
        ]) {
          const ni = i + di;
          const nj = j + dj;
          if (ni >= 0 && ni < N && nj >= 0 && nj < M && !visited[ni][nj]) {
            visited[ni][nj] = true;
            blocked.push([ni, nj]);
          }
        }
        visited[i][j] = true;
        backTracking(count + 1, currentSum + grid[i][j], i);
        visited[i][j] = false;
        for (const [ni, nj] of blocked) {
          visited[ni][nj] = false;
        }
      }
    }
  }
}
