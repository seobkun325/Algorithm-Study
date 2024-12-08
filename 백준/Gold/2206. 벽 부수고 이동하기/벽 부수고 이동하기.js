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

const [N, M] = input[0].split(" ").map(Number);

const grid = [];
for (let i = 1; i <= N; i++) {
  grid.push(input[i].split("").map(Number));
}

let answer = Infinity;
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => [false, false]));

findRoute();
console.log(answer === Infinity ? -1 : answer);

function findRoute() {
  const q = new Queue();
  q.push([0, 0, 1, true]);
  visited[0][0][1] = true;

  while (q.size() > 0) {
    const [ci, cj, dist, canBreak] = q.popleft();

    // 도착 지점에 도달한 경우
    if (ci === N - 1 && cj === M - 1) {
      answer = dist;
      return;
    }

    for (let [di, dj] of [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
    ]) {
      const [ni, nj] = [ci + di, cj + dj];

      if (ni >= 0 && ni < N && nj >= 0 && nj < M) {
        // 벽이 아닌 경우
        if (grid[ni][nj] === 0 && !visited[ni][nj][+canBreak]) {
          visited[ni][nj][+canBreak] = true;
          q.push([ni, nj, dist + 1, canBreak]);
        }

        // 벽을 부수고 이동하는 경우
        if (canBreak && grid[ni][nj] === 1 && !visited[ni][nj][0]) {
          visited[ni][nj][0] = true;
          q.push([ni, nj, dist + 1, false]);
        }
      }
    }
  }
}