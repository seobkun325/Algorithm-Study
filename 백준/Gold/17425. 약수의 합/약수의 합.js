const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let f = Array(1000001).fill(1);
let g = Array(1000001);
f[0] = 0;
g[0] = 0;

for (let i = 2; i <= 1000000; i++) {
  for (let j = 1; i * j <= 1000000; j++) {
    f[i * j] += i;
  }
}

for (let i = 1; i <= 1000000; i++) {
  g[i] = g[i - 1] + f[i];
}

let result = "";
for (let i = 1; i < input.length; i++) {
  if (i === input.length - 1) {
    result += g[input[i]];
  } else {
    result += g[input[i]] + "\n";
  }
}
console.log(result);
