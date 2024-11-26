const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

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

// 솔루션
function solution() {
  const [M, N] = input[0].split(" ").map(Number);
  const grid = Array.from({ length: N }, () => Array(M).fill([]));
  for (let i = 1; i <= N; i++) {
    const tmp = input[i].split(" ").map(Number);
    for (let j = 0; j < M; j++) {
      grid[i - 1][j] = bitMasking(tmp[j]);
    }
  }

  const visited = Array.from({ length: N }, () => Array(M).fill(-1));
  const roomSizes = [];
  let roomId = 0;

  // 방 크기 및 방 ID 기록
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (visited[i][j] === -1) {
        const roomSize = bfs(i, j, grid, visited, roomId, N, M);
        roomSizes[roomId] = roomSize;
        roomId++;
      }
    }
  }

  // 최대 방 크기 계산
  let maxRoomSize = Math.max(...roomSizes);

  // 벽을 하나 허물고 가능한 최대 방 크기 찾기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let [di, dj] of [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
      ]) {
        const ni = i + di;
        const nj = j + dj;
        if (ni >= 0 && ni < N && nj >= 0 && nj < M) {
          const currentRoom = visited[i][j];
          const nextRoom = visited[ni][nj];
          if (currentRoom !== nextRoom) {
            const combinedRoomSize = roomSizes[currentRoom] + roomSizes[nextRoom];
            maxRoomSize = Math.max(maxRoomSize, combinedRoomSize);
          }
        }
      }
    }
  }

  console.log(roomId); // 방의 개수
  console.log(Math.max(...roomSizes)); // 가장 큰 방 크기
  console.log(maxRoomSize); // 벽을 하나 허물고 가장 큰 방 크기
}

// 비트마스킹 후, 이동가능 방향 셋팅
function bitMasking(num) {
  const arr = [0, 0, 0, 0];
  const d = [];
  let idx = 3;
  while (num > 0) {
    arr[idx--] = num & 1;
    num = num >> 1;
  }
  for (let i = 0; i < 4; i++) {
    if (arr[i] === 0) {
      switch (i) {
        case 0:
          d.push([1, 0]);
          break;
        case 1:
          d.push([0, 1]);
          break;
        case 2:
          d.push([-1, 0]);
          break;
        case 3:
          d.push([0, -1]);
          break;
      }
    }
  }
  return d;
}

// bfs 탐색
function bfs(si, sj, grid, visited, roomId, N, M) {
  const q = new Queue();
  let roomSize = 1;
  q.push([si, sj]);
  visited[si][sj] = roomId;
  while (q.size() > 0) {
    const [ci, cj] = q.popleft();
    for (let [di, dj] of grid[ci][cj]) {
      const ni = ci + di;
      const nj = cj + dj;
      if (ni >= 0 && ni < N && nj >= 0 && nj < M && visited[ni][nj] === -1) {
        visited[ni][nj] = roomId;
        roomSize++;
        q.push([ni, nj]);
      }
    }
  }
  return roomSize;
}

solution();
