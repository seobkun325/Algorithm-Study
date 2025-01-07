const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const arr2 = Array(N + 1).fill(0);
const arr5 = Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  arr2[i] = arr2[i - 1];
  arr5[i] = arr5[i - 1];
  if (i % 2 === 0) {
    let tmp1 = i;
    while (tmp1 % 2 === 0) {
      arr2[i]++;
      tmp1 /= 2;
    }
  }
  if (i % 5 === 0) {
    let tmp2 = i;
    while (tmp2 % 5 === 0) {
      arr5[i]++;
      tmp2 /= 5;
    }
  }
}

console.log(Math.min(arr2[N], arr5[N]));
