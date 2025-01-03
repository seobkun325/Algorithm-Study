const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
for (let i = 0; i < N; i++) {
  const arr = [];
  for (let j = 4 * i + 1; j < 4 * i + 5; j++) {
    const [a, b] = input[j].split(" ").map(Number);
    arr.push([a, b]);
  }
  arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  console.log(calculate(arr));
}

function calculate(arr) {
  const [a, b, c, d] = arr;
  const x1 = (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
  const x2 = (c[0] - d[0]) ** 2 + (c[1] - d[1]) ** 2;
  const x3 = (d[0] - a[0]) ** 2 + (d[1] - a[1]) ** 2;
  const x4 = (b[0] - c[0]) ** 2 + (b[1] - c[1]) ** 2;
  const d1 = (d[1] - a[1]) * (b[1] - c[1]);
  const d2 = (b[0] - c[0]) * (d[0] - a[0]);
  if (x1 !== x2) return 0;
  if (x3 !== x4) return 0;
  if (d1 !== -d2) return 0;
  return 1;
}