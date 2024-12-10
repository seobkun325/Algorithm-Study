const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
const crossWord = [];
for (let i = 1; i <= N; i++) {
  crossWord.push(...input[i].split("#"));
}
for (let j = 0; j < M; j++) {
  let tmp = "";
  for (let i = 1; i <= N; i++) {
    tmp += input[i][j];
  }
  crossWord.push(...tmp.split("#"));
}
let wordList = [];
for (let i = 0; i < crossWord.length; i++) {
  if (crossWord[i].length >= 2) {
    wordList.push(crossWord[i]);
  }
}
wordList.sort();
console.log(wordList[0]);
