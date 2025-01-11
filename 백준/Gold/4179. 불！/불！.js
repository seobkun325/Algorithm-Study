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

const [N, M] = input[0].split(" ").map(Number);
const grid = [];
for (let i = 1; i <= N; i++) {
  grid.push(input[i].split(""));
}
const visited = Array.from({ length: N }, () => Array(M).fill(-1));
const fire = Array.from({ length: N }, () => Array(M).fill(Infinity));
const directions = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let fireStart = [];
let jihoonStart = [0, 0];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] === "J") {
      jihoonStart = [i, j];
      visited[i][j] = 0;
    } else if (grid[i][j] === "F") {
      fireStart.push([i, j]);
      fire[i][j] = 0;
    }
  }
}
fireSpread(fireStart);
jihoonMove(jihoonStart[0], jihoonStart[1]);

function fireSpread(arr) {
  const q = new Queue();
  for (let [si, sj] of arr) {
    q.push([si, sj]);
  }
  while (q.size() > 0) {
    const [ci, cj] = q.popleft();
    for (let [di, dj] of directions) {
      const [ni, nj] = [ci + di, cj + dj];
      if (ni >= 0 && ni < N && nj >= 0 && nj < M && grid[ni][nj] !== "#" && fire[ni][nj] === Infinity) {
        fire[ni][nj] = fire[ci][cj] + 1;
        q.push([ni, nj]);
      }
    }
  }
}

function jihoonMove(si, sj) {
  const q = new Queue();
  q.push([si, sj]);
  while (q.size() > 0) {
    const [ci, cj] = q.popleft();
    if (ci === 0 || ci === N - 1 || cj === 0 || cj === M - 1) {
      console.log(visited[ci][cj] + 1);
      return;
    }
    for (let [di, dj] of directions) {
      const [ni, nj] = [ci + di, cj + dj];
      if (
        ni >= 0 &&
        ni < N &&
        nj >= 0 &&
        nj < M &&
        visited[ni][nj] === -1 &&
        grid[ni][nj] !== "#" &&
        visited[ci][cj] + 1 < fire[ni][nj]
      ) {
        visited[ni][nj] = visited[ci][cj] + 1;
        q.push([ni, nj]);
      }
    }
  }
  console.log("IMPOSSIBLE");
  return;
}
