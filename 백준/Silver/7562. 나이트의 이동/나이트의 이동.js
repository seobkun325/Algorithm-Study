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

const TC = parseInt(input[0]);
for (let i = 0; i < TC; i++) {
  const N = parseInt(input[i * 3 + 1]);
  const [si, sj] = input[i * 3 + 2].split(" ").map(Number);
  const [ei, ej] = input[i * 3 + 3].split(" ").map(Number);
  console.log(bfs(si, sj, ei, ej, N));
}

function bfs(si, sj, ei, ej, N) {
  const q = new Queue();
  const visited = Array.from({ length: N }, () => Array(N).fill(-1));
  q.push([si, sj]);
  visited[si][sj] = 1;
  while (q.size() > 0) {
    const [ci, cj] = q.popleft();
    if (ci === ei && cj === ej) {
      return visited[ci][cj] - 1;
    }
    for (let [di, dj] of [
      [2, 1],
      [2, -1],
      [1, 2],
      [1, -2],
      [-2, 1],
      [-2, -1],
      [-1, 2],
      [-1, -2],
    ]) {
      const ni = ci + di;
      const nj = cj + dj;
      if (ni >= 0 && ni < N && nj >= 0 && nj < N && visited[ni][nj] === -1) {
        q.push([ni, nj]);
        visited[ni][nj] = visited[ci][cj] + 1;
      }
    }
  }
}
