const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const grid = [];
for (let i = 1; i <= N; i++) {
  grid.push(input[i].split(""));
}

let visited = Array.from({ length: N }, () => Array(M).fill(0));
let answer = 0;
for (let i = 0; i < N; i++) {
  if (move(i, 0, visited)) {
    answer += 1;
  }
}
console.log(answer);

// 0: 탐색가능영역  1: 탐색중   2: 탐색완료 및 선정완료   3:탐색완료 및 비선정
function move(ci, cj, visited) {
  if (cj === M - 1) {
    visited[ci][cj] = 2;
    return true;
  }
  for (let di of [-1, 0, 1]) {
    const [ni, nj] = [ci + di, cj + 1];
    if (ni >= 0 && ni < N && nj >= 0 && nj < M && visited[ni][nj] === 0 && grid[ni][nj] === ".") {
      visited[ni][nj] = 1;
      if (move(ni, nj, visited)) {
        visited[ci][cj] = 2;
        return true;
      }
      visited[ni][nj] = 3;
    }
  }
  return false;
}
