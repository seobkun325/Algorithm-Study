const fs = require("fs");
const [x, y, c] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let left = 0;
let right = Math.min(x, y);
while (right - left >= 0.001) {
  const mid = (left + right) / 2;
  const h1 = Math.sqrt(x ** 2 - mid ** 2);
  const h2 = Math.sqrt(y ** 2 - mid ** 2);
  const res = (h1 * h2) / (h1 + h2);
  if (res >= c) {
    left = mid;
  } else {
    right = mid;
  }
}

console.log(right.toFixed(3));
