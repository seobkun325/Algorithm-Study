const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += Math.floor(N/i) * i;
}
console.log(sum);
