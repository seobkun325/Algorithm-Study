const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let answer = 0;
if (N%M === 0) console.log(0);
else console.log(M - GCD(N, M));

function GCD(a, b) {
  if (a % b === 0) return b;

  return GCD(b, a % b);
}
