const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const Arr = input[1].split(" ").map(Number);
const maxNum = Math.max(...Arr);
let graph = Array.from({ length: maxNum + 1 }, () => [-1]);
for (let i = 0; i < Arr.length - 1; i++) {
  const [a, b] = [Arr[i], Arr[i + 1]];
  if (graph[a].includes(b)) {
    continue;
  }
  graph[b].pop();
  graph[b].push(a);
}
console.log(graph.length);
console.log(graph.join(" "));
