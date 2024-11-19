const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const words = [];
let maxLength = 0;
for (let i = 1; i <= N; i++) {
  words.push(input[i].split(""));
  maxLength = Math.max(maxLength, input[i].length);
}
for (let i = 0; i < N; i++) {
  while (words[i].length < maxLength) {
    words[i] = ["", ...words[i]];
  }
}
const value = {};
//단어별로
for (let i = 0; i < N; i++) {
  //자리수 돌면서
  for (let j = 0; j < maxLength; j++) {
    const word = words[i][j];
    if (word === "") continue;
    if (!value[word]) {
      value[word] = [word, 0];
    }
    // 가치(1의자리면 1, 10의자리면 10, 100의 자리면 100 ...
    value[word][1] += 10 ** (maxLength - j - 1);
  }
}
const arr = Object.values(value);
arr.sort((a, b) => b[1] - a[1]);
let number = 9;
for (let i = 0; i < arr.length; i++) {
  arr[i][1] = number--;
}

const newValue = {};
for (let i = 0; i < arr.length; i++) {
  const word = arr[i][0];
  newValue[word] = arr[i][1];
}
const answer = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < maxLength; j++) {
    const word = words[i][j];
    if (word === "") continue;
    words[i][j] = newValue[word];
  }
  answer.push(parseInt(words[i].join("")));
}
const ans = answer.reduce((a, b) => a + b, 0);
console.log(ans);
