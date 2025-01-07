const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(lcd(a, b));
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcd(a, b) {
  return (a * b) / gcd(a, b);
}
