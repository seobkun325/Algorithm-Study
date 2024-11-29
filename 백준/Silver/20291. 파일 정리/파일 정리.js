const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = {};
for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(".");
  if (arr[b]) {
    arr[b]++;
  } else {
    arr[b] = 1;
  }
}

const sortedArr = Object.entries(arr).sort((a, b) => a[0].localeCompare(b[0]));
for (let [key, value] of sortedArr) {
  console.log(key, value);
}
