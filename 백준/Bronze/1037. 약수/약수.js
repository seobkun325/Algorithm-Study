const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);

const x = Math.max(...arr);
const y = Math.min(...arr);

console.log(x * y);
