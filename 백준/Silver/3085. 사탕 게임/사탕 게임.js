const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = [];
let result = 0;

for (let i = 1; i <= N; i++) {
  const tmpInput = input[i].split("");
  arr.push(tmpInput);
}

function check() {
  // 가로 터뜨리기
  for (let i = 0; i < N; i++) {
    let cnt = 1;
    for (let j = 0; j < N - 1; j++) {
      if (arr[i][j] === arr[i][j + 1]) {
        cnt++;
        result = Math.max(result, cnt);
      } else cnt = 1;
    }
  }

  // 세로 터뜨리기
  for (let i = 0; i < N; i++) {
    cnt = 1;
    for (let j = 0; j < N - 1; j++) {
      if (arr[j][i] === arr[j + 1][i]) {
        cnt++;
        result = Math.max(result, cnt);
      } else cnt = 1;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - 1; j++) {
    // 가로 바꾸기
    let tmp = arr[i][j];
    arr[i][j] = arr[i][j + 1];
    arr[i][j + 1] = tmp;
    check();
    // 원복
    tmp = arr[i][j];
    arr[i][j] = arr[i][j + 1];
    arr[i][j + 1] = tmp;

    // 세로 바꾸기
    tmp = arr[j][i];
    arr[j][i] = arr[j + 1][i];
    arr[j + 1][i] = tmp;
    check();
    // 원복
    tmp = arr[j][i];
    arr[j][i] = arr[j + 1][i];
    arr[j + 1][i] = tmp;
  }
}

console.log(result);
