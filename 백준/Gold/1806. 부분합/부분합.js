const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, S] = input[0].split(" ").map(Number);
const arr = [0, ...input[1].split(" ").map(Number)];

for (let i = 1; i <= N; i++) {
  arr[i] += arr[i - 1];
}

let minLength = Infinity;
let head = 0;
let tail = 1;

while (tail <= N) {
  if (head >= tail) {
    tail++;
  }
  if (arr[tail] - arr[head] >= S) {
    minLength = Math.min(minLength, tail - head);
    head++;
  } else {
    tail++;
  }
}
if (minLength === Infinity) console.log(0);
else console.log(minLength);
