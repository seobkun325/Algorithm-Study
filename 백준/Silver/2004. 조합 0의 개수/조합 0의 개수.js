const fs = require("fs");
const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const A = countTwo(n) - countTwo(m) - countTwo(n - m);
const B = countFive(n) - countFive(m) - countFive(n - m);

console.log(Math.min(A, B));

function countTwo(N) {
  let count = 0;
  let tmp = N;
  while (tmp >= 2) {
    count += Math.floor(tmp / 2);
    tmp = Math.floor(tmp / 2);
  }
  return count;
}

function countFive(N) {
  let count = 0;
  let tmp = N;
  while (tmp >= 5) {
    count += Math.floor(tmp / 5);
    tmp = Math.floor(tmp / 5);
  }
  return count;
}

