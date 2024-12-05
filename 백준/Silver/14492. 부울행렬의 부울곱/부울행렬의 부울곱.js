const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = [];
const B = [];

for (let i = 1; i <= N; i++) {
  A.push(input[i].split(" ").map(Number));
}
for (let i = N + 1; i <= 2 * N; i++) {
  B.push(input[i].split(" ").map(Number));
}

let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let cij = 0;
    for (let k = 0; k < N; k++) {
      cij = cij || (A[i][k] && B[k][j]);
      if (cij) break;
    }
    if (cij) count++;
  }
}

console.log(count);