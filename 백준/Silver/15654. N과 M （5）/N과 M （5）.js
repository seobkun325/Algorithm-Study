const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

backTracking([]);

function backTracking(stack) {
  if (stack.length === M) {
    console.log(stack.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (stack.includes(arr[i])) continue;
    stack.push(arr[i]);
    backTracking(stack);
    stack.pop();
  }
}
