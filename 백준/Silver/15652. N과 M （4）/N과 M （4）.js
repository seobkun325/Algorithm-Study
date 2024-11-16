const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

for (let i = 1; i <= N; i++) {
  backTracking([i]);
}

function backTracking(stack) {
  if (stack.length === M) {
    console.log(stack.join(" "));
    return;
  }

  for (let i = stack[stack.length - 1]; i <= N; i++) {
    stack.push(i);
    backTracking(stack);
    stack.pop();
  }
}
