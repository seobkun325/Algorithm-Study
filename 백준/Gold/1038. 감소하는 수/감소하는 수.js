const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const answerList = [];

for (let i = 0; i <= 10; i++) {
  const stack = [];
  dfs(0, i, stack);
}
answerList.sort((a, b) => a - b);

if (N >= answerList.length) {
  console.log(-1);
} else console.log(answerList[N]);

function dfs(L, len, stack) {
  if (L === len) {
    if (stack.length === 0) return;
    answerList.push(parseInt(stack.join("")));
    return;
  }
  for (let j = 9; j >= 0; j--) {
    if (stack.length === 0 || stack[stack.length - 1] > j) {
      stack.push(j);
      dfs(L + 1, len, stack);
      stack.pop();
    }
  }
}
