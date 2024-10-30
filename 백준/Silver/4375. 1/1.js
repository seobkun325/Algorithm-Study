const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = [];

for (let i = 0; i < input.length; i++) {
  let n = input[i];
  let target = n;
  let cnt = 0;

  while (true) {
    if (target === 0) {
      answer.push(cnt);
      break;
    } else if (target % 10 == 1) {
      cnt++;
      target = Math.floor(target / 10);
    } else {
      target += n;
    }
  }
}
console.log(answer.join("\n"));