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
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

bfs(N, K);

function bfs(start, end) {
  const q = new Queue();
  const visited = Array(100001).fill(-1);
  const paths = Array(100001).fill(-1);
  q.push(start);
  visited[start] = 0;
  while (q.size() > 0) {
    const current = q.popleft();
    if (current === end) {
      console.log(visited[current]);
      console.log(getPath(end, paths));
      return;
    }
    for (let next of [current - 1, current + 1, current * 2]) {
      if (next >= 0 && next <= 100000 && visited[next] === -1) {
        visited[next] = visited[current] + 1;
        paths[next] = current;
        q.push(next);
      }
    }
  }
}

function getPath(end, paths) {
  const path = [];
  let current = end;
  while (current !== -1) {
    path.push(current);
    current = paths[current];
  }
  return path.reverse().join(" ");
}
