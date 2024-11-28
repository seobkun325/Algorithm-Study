const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const document = input[0];
const word = input[1];

function find(document, word) {
  let count = 0;
  let index = 0;

  while (index <= document.length - word.length) {
    const foundIndex = document.indexOf(word, index);

    if (foundIndex === -1) break;

    count++;
    index = foundIndex + word.length;
  }
  return count;
}

console.log(find(document, word));
