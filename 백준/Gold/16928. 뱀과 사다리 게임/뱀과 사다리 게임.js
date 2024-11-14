// 클래스 정의
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
const graph = Array(101).fill(0);

for (let i = 1; i <= N + M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u] = v;
}
move(1);

// 움직임 함수
function move(start) {
  const q = new Queue();
  q.push(start);
  let visited = Array(101).fill(Infinity);
  visited[start] = 0;

  while (q.size() > 0) {
    const current = q.popleft();

    if (current === 100) {
      console.log(visited[current]);
      return;
    }

    for (let dice = 1; dice <= 6; dice++) {
      let next = current + dice;

      if (next > 100) continue;

      if (graph[next] > 0) {
        next = graph[next];
      }

      if (visited[next] > visited[current] + 1) {
        visited[next] = visited[current] + 1;
        q.push(next);
      }
    }
  }
}
