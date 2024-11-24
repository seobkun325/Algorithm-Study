const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const line = [];
for (let i = 1; i <= N; i++) {
  const [L, H] = input[i].split(" ").map(Number);
  line.push([L, H]);
}
let leftStart = 0;
let rightStart = N - 1;
let maxH = 0;
line.sort((a, b) => a[0] - b[0]);
const stackForward = [];
for (let i = 0; i < N; i++) {
  if (stackForward.length === 0) {
    stackForward.push(line[i]);
  } else {
    if (stackForward[stackForward.length - 1][1] < line[i][1]) {
      stackForward.push(line[i]);
    }
  }
}
if (stackForward.length > 0) {
  leftStart = stackForward[stackForward.length - 1][0];
  maxH = stackForward[stackForward.length - 1][1];
}
const stackBackward = [];
for (let i = N - 1; i >= 0; i--) {
  const [L, H] = line[i];
  if (stackBackward.length === 0) {
    stackBackward.push([L + 1, H]);
  } else {
    if (stackBackward[stackBackward.length - 1][1] < line[i][1]) {
      stackBackward.push([L + 1, H]);
    }
  }
}
if (stackBackward.length > 0) {
  rightStart = stackBackward[stackBackward.length - 1][0];
  maxH = stackBackward[stackBackward.length - 1][1];
}
stackBackward.sort((a, b) => b[1] - a[1]);

let ans = 0;
for (let i = 0; i < stackForward.length - 1; i++) {
  ans += (stackForward[i + 1][0] - stackForward[i][0]) * stackForward[i][1];
}
ans += (rightStart - leftStart) * maxH;
for (let i = stackBackward.length - 1; i > 0; i--) {
  ans += (stackBackward[i][0] - stackBackward[i - 1][0]) * stackBackward[i][1];
}
console.log(ans);
