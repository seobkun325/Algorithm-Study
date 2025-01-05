const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);
const ans = Array(arr.length).fill(-1);

let F = {};
for (let x of arr) {
  if (!F[x]) {
    F[x] = 1;
  } else F[x]++;
}

let stack = [];

for (let i = 0; i < arr.length; i++) {
  while (stack.length && F[arr[stack[stack.length - 1]]] < F[arr[i]]) {
    ans[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(ans.join(" "));
