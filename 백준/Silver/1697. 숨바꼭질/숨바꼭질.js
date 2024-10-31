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
    this.rear += 1;
  }

  popLeft() {
    if (this.size() === 0) {
      return undefined;
    }
    const tmp = this.arr[this.front];
    this.front += 1;
    return tmp;
  }
}

function bfs(start, end) {
  const q = new Queue();
  q.push(start);
  let visited = Array(200001).fill(0);
  visited[start] = 1;
  while (q.size() > 0) {
    const current = q.popLeft();
    if (current == end) {
      return visited[current] - 1;
    }
    for (let n of [current - 1, current + 1, current * 2]) {
      if (n >= 0 && n <= 200000 && visited[n] == 0) {
        visited[n] = visited[current] + 1;
        q.push(n);
      }
    }
  }
  return -1;
}

const fs = require("fs");
const [start, end] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(bfs(start, end));
