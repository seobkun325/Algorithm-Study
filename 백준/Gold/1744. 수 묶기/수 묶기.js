const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input.slice(1).map(Number);

arr.sort((a, b) => b - a);
let answer = 0;
// 양수 구간 계산 (1 제외)
let i = 0;
while (i < arr.length && arr[i] > 1) {
  if (i + 1 < arr.length && arr[i + 1] > 1) {
    answer += arr[i] * arr[i + 1];
    i += 2;
  } else {
    answer += arr[i];
    i++;
  }
}

// 1 구간 계산
while (i < arr.length && arr[i] === 1) {
  answer += arr[i];
  i++;
}

// 음수 구간 계산
let j = arr.length - 1;
while (j >= i && arr[j] <= 0) {
  if (j - 1 >= i && arr[j - 1] <= 0) {
    answer += arr[j] * arr[j - 1];
    j -= 2;
  } else {
    answer += arr[j];
    j--;
  }
}

console.log(answer);
