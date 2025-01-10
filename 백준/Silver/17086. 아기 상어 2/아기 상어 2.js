class Queue {
  constructor() {
    this.arr = [];
    this.front = 0;
    this.rear = 0;
  }
  size() {
    return this.rear - this.front;
  }
  push(value) {
    this.arr[this.rear] = value;
    this.rear++;
  }
  popleft() {
    if (this.size() === 0) {
      return undefined;
    }
    const tmp = this.arr[this.front];
    this.front++;
    return tmp;
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const grid = [];
const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
];
for (let i = 0; i < N; i++) {
  grid.push(input[i].split(" ").map(Number));
}
let ans = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] === 0) {
      ans = Math.max(ans, bfs(i, j));
    }
  }
}
console.log(ans);

function bfs(si, sj) {
  const q = new Queue();
  const visited = Array.from({ length: N }, () => Array(M).fill(-1));
  q.push([si, sj]);
  visited[si][sj] = 0;
  while (q.size() > 0) {
    const [ci, cj] = q.popleft();
    if (grid[ci][cj] === 1) {
      return visited[ci][cj];
    }
    for (let [di, dj] of directions) {
      const [ni, nj] = [ci + di, cj + dj];
      if (ni >= 0 && ni < N && nj >= 0 && nj < M && visited[ni][nj] === -1) {
        visited[ni][nj] = visited[ci][cj] + 1;
        q.push([ni, nj]);
      }
    }
  }
}