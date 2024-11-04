const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const Arr = input[1].split(" ").map(Number);

let [head, tail] = [0, 0];
let maxSum = 0;
let sum = 0;

while (tail < N) {
  sum += Arr[tail];

  // 한계를 넘었지만, 앞포인터를 줄일 수 있을 때
  while (sum > M && head <= tail) {
    sum -= Arr[head];
    head += 1;
  }
  // 합이 한계이하 일때,
  if (sum <= M) {
    maxSum = Math.max(maxSum, sum);

    tail += 1;
  }
}
console.log(maxSum);
