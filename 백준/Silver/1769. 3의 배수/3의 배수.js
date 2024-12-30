const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("").map(Number);
let tmp = input.reduce((a, b) => a + b, 0);
let cnt = 0;
if (tmp > 9) cnt += 1;
while (tmp > 9) {
  let arr = tmp.toString().split("").map(Number);
  tmp = arr.reduce((a, b) => a + b, 0);
  cnt += 1;
}
console.log(cnt);
if (tmp % 3 === 0) {
  console.log("YES");
} else {
  console.log("NO");
}
