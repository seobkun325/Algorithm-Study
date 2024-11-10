const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
let head = 0;
let tail = arr.length - 1;
let answer = [head, tail];
let minSum = arr[answer[0]] + arr[answer[1]];

// 투포인터
while (head < tail) {
  let tmpSum = arr[head] + arr[tail];

  // 갱신
  if (Math.abs(tmpSum) < Math.abs(minSum)) {
    minSum = tmpSum;
    answer = [head, tail];
  }

  // 찾으면 종료
  if (tmpSum === 0) {
    break;
  }

  // 이동
  if (tmpSum > 0) {
    tail -= 1;
  } else {
    head += 1;
  }
}

console.log(arr[answer[0]], arr[answer[1]]);
