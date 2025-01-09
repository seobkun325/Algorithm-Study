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

const TC = parseInt(input.shift());
let index = 0;
for (let i = 0; i < TC; i++) {
  const [V, E] = input[index++].split(" ").map(Number);
  const graph = Array.from({ length: V + 1 }, () => []);
  const visited = Array(V + 1).fill(0);

  for (let j = 0; j < E; j++) {
    const [a, b] = input[index++].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  let isBipartite = true;

  for (let j = 1; j <= V; j++) {
    if (visited[j] === 0) {
      if (!bfs(j, graph, visited)) {
        isBipartite = false;
        break;
      }
    }
  }

  console.log(isBipartite ? "YES" : "NO");
}

function bfs(start, graph, visited) {
  const q = new Queue();
  q.push(start);
  visited[start] = 1;
  while (q.size() > 0) {
    const current = q.popleft();
    const currentColor = visited[current];

    for (const next of graph[current]) {
      if (visited[next] === 0) {
        visited[next] = 3 - currentColor;
        q.push(next);
      } else if (visited[next] === currentColor) {
        return false;
      }
    }
  }
  return true;
}

