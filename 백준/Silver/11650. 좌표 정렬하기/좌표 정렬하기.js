const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("./stdin.txt").toString().trim().split("\n");

const T = parseInt(input[0]);
const arr = [];
for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  arr.push([a, b]);
}

arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].join(" "));
}
