const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const K = parseInt(input[0]);
const fourWays = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];
const arr = [[0, 0]];
for (let i = 1; i <= 6; i++) {
  const [direction, position] = input[i].split(" ").map(Number);
  let [tmpI, tmpJ] = arr[i - 1];
  let [di, dj] = fourWays[direction - 1];
  tmpI = di * position + tmpI;
  tmpJ = dj * position + tmpJ;
  arr.push([tmpI, tmpJ]);
}
arr.push([0, 0]);

function calculate(arr) {
  let area = 0;
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    const [x1, y1] = arr[i];
    const [x2, y2] = arr[i + 1];
    area += x1 * y2 - y1 * x2;
  }

  return Math.abs(area) / 2;
}

const area = calculate(arr) * K;
console.log(area);
