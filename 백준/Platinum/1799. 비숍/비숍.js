const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input.shift();
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

// i+j같은 놈들을 line으로 관리
const line = Array.from({ length: 2 * N }, () => []);
const visited = Array(2 * N).fill(false);
let ans = 0;

// 둘 수 있는 곳만 보관
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j]) line[i + j].push([i, j]);
  }
}

// n : 현재 line넘버, cnt : 현재 비숍배치수
function backTracking(n, cnt) {
  // 앞으로 최대 배치 가능한게 ans 이하면 쳐냄
  if (ans >= 2 * N - 1 - n + cnt) return;

  // 마지막 라인까지 왔으면 최대값 갱신
  if (n === 2 * N - 1) {
    ans = Math.max(ans, cnt);
    return;
  }
  for (let [i, j] of line[n]) {
    const tmp = i - j + N - 1;
    if (!visited[tmp]) {
      visited[tmp] = true;
      backTracking(n + 1, cnt + 1);
      visited[tmp] = false;
    }
  }

  // 이번 줄에서 안고르고 다움줄로 넘어갈때
  backTracking(n + 1, cnt);
}

backTracking(0, 0);
console.log(ans);
