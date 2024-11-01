const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

for (let i = 1; i <= N; i++) {
  const line = input[i].split("").sort();
  let visited = Array(line.length).fill(false);
  const ansList = [];
  function permutation(depth, currentString) {
    if (depth === line.length) {
      ansList.push(currentString);
      return;
    }
    let lastUsed = null;
    for (let j = 0; j < line.length; j++) {
      if (!visited[j] && line[j] !== lastUsed) {
        visited[j] = true;
        permutation(depth + 1, currentString + line[j]);
        visited[j] = false;
        lastUsed = line[j];
      }
    }
  }

  permutation(0, "");
  console.log(ansList.join("\n"));
}
