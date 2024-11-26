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

const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const [start, end] = input[input.length - 1].split(" ").map(Number);

function bfs(weight) {
  const q = new Queue();
  const visited = Array(N + 1).fill(false);
  q.push(start);
  visited[start] = true;

  while (q.size() > 0) {
    const current = q.popleft();
    if (current === end) {
      return true;
    }
    for (const [next, nextWeight] of graph[current]) {
      if (nextWeight >= weight && visited[next] === false) {
        visited[next] = true;
        q.push(next);
      }
    }
  }
  return false;
}

function binarySearch() {
  let left = 1;
  let right = 1000000000;
  result = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (bfs(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(result);
}

binarySearch();