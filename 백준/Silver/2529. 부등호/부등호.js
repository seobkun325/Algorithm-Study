const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let maxNum = 0;
let minNum = Infinity;
let maxAns = "";
let minAns = "";

const k = parseInt(input[0]);
const arr = input[1].split(" ");

for (let i = 0; i < 10; i++) {
  backTracking([i]);
}

function backTracking(result) {
  // 비교
  if (result.length === k + 1) {
    let tmp = result.join("");
    if (parseInt(tmp) > maxNum) {
      maxNum = parseInt(tmp);
      maxAns = tmp;
    }
    if (parseInt(tmp) < minNum) {
      minNum = parseInt(tmp);
      minAns = tmp;
    }
    return;
  }
  const currentNum = result[result.length - 1];
  const command = arr[result.length - 1];
  if (command === "<") {
    for (let i = currentNum + 1; i < 10; i++) {
      if (!result.includes(i)) {
        result.push(i);
        backTracking(result);
        result.pop();
      }
    }
  } else {
    for (let i = 0; i < currentNum; i++) {
      if (!result.includes(i)) {
        result.push(i);
        backTracking(result);
        result.pop();
      }
    }
  }
}

console.log(maxAns);
console.log(minAns);
