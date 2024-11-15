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

  popLeft() {
    if (this.size() === 0) {
      return undefined;
    }
    return this.arr[this.front++];
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const graph = Array.from({ length: N + 1 }, () => []);
let visited = Array(N + 1).fill(-1);
let readyToAdd = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  const neighbors = input[i].split(" ").map(Number);
  for (let j = 0; j < neighbors.length - 1; j++) {
    graph[i].push(neighbors[j]);
  }
}

const M = parseInt(input[N + 1]);
const firstRumor = input[N + 2].split(" ").map(Number);

const q = new Queue();
for (let start of firstRumor) {
  visited[start] = 0;
  q.push(start);
}

while (q.size() > 0) {
  const current = q.popLeft();

  for (let next of graph[current]) {
    if (visited[next] !== -1) continue;

    readyToAdd[next]++;

    if (readyToAdd[next] >= Math.ceil(graph[next].length / 2)) {
      visited[next] = visited[current] + 1;
      q.push(next);
    }
  }
}
console.log(visited.slice(1).join(" "));
