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
    const tmp = this.arr[this.front];
    this.front++;
    return tmp;
  }
}

// 입력
const fs = require("fs");
const [input, ...Data] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M, V] = input.split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

// 그래프 생성
for (let i = 0; i < M; i++) {
  const [a, b] = Data[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// 그래프 정렬
for (let i = 0; i < N + 1; i++) {
  graph[i].sort((a, b) => a - b);
}

// DFS BFS 구현
function dfs(v, visited) {
  visited[v] = 1;
  dfsResult.push(v);
  for (const next of graph[v]) {
    if (visited[next] === 0) {
      dfs(next, visited);
    }
  }
}

function bfs(v) {
  const q = new Queue();
  q.push(v);
  visited[v] = 1;
  while (q.size() > 0) {
    const current = q.popleft();
    bfsResult.push(current);
    for (let next of graph[current]) {
      if (visited[next] === 0) {
        visited[next] = 1;
        q.push(next);
      }
    }
  }
}

// 결과
let visited = Array(N + 1).fill(0);
const dfsResult = [];
dfs(V, visited);

visited = Array(N + 1).fill(0);
const bfsResult = [];
bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
