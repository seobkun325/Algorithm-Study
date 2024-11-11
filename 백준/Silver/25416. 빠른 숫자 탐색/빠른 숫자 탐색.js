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
    this.arr[this.rear++] = value;
  }
  popleft() {
    if (this.size() === 0) {
      return undefined;
    }
    const tmp = this.arr[this.front++];
    return tmp;
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let grid = Array.from({ length: 5 });
for (let i = 0; i < 5; i++) {
  grid[i] = input[i].split(" ").map(Number);
}
const [si, sj] = input[5].split(" ").map(Number);
bfs(si, sj);

function bfs(si, sj) {
  const q = new Queue();
  let visited = Array.from({ length: 5 }, () => Array(5).fill(-1));
  q.push([si, sj]);
  visited[si][sj] = 0;
  while (q.size() > 0) {
    const [ci, cj] = q.popleft();
    if (grid[ci][cj] === 1) {
      console.log(visited[ci][cj]);
      return;
    }
    for (let [di, dj] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const ni = ci + di;
      const nj = cj + dj;
      if (ni >= 0 && ni < 5 && nj >= 0 && nj < 5 && visited[ni][nj] === -1 && grid[ni][nj] !== -1) {
        visited[ni][nj] = visited[ci][cj] + 1;
        q.push([ni, nj]);
      }
    }
  }
  console.log(-1);
}
