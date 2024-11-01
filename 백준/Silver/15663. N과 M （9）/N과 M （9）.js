const fs = require("fs");
//const input = fs.readFileSync("./stdin.txt").toString().trim().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let visited = Array(N).fill(false);

const result = [];
let temp = [];
function combinations(depth) {
  if (depth === M) {
    temp.push(result.join(" "));
    return;
  }
  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      result.push(numbers[i]);
      visited[i] = true;
      combinations(depth + 1);
      visited[i] = false;
      result.pop();
    }
  }
}
combinations(0);
const answer = [...new Set(temp)];
console.log(answer.join("\n"));
