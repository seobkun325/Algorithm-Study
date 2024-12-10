const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
for (let i = 0; i < N; i++) {
  let word = input[i + 1].split("");
  let swapPoint = -1;
  for (let j = word.length - 1; j > 0; j--) {
    if (word[j - 1] < word[j]) {
      swapPoint = j - 1;
      break;
    }
  }
  if (swapPoint === -1) {
    console.log(word.join(""));
  } else {
    let [a, b] = [word.slice(0, swapPoint + 1), word.slice(swapPoint + 1).sort()];
    for (let j = 0; j < b.length; j++) {
      if (a[a.length - 1] < b[j]) {
        [a[a.length - 1], b[j]] = [b[j], a[a.length - 1]];
        break;
      }
    }
    console.log(a.concat(b).join(""));
  }
}
