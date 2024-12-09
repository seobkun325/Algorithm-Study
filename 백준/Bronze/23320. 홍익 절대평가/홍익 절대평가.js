const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const scores = input[1].split(" ").map(Number);
const [X, Y] = input[2].split(" ").map(Number);

calc(N, scores, X, Y);

function calc(N, scores, X, Y) {
  const relate = Math.floor((N * X) / 100);
  const sortedScores = scores.slice().sort((a, b) => b - a);
  const relateA = sortedScores.slice(0, relate);
  const absoluteA = scores.filter((score) => score >= Y);

  console.log(relateA.length, absoluteA.length);
}
