const fs = require("fs");
const [N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let results = [];
backTracking([]);

function backTracking(tmp) {
  if (tmp.length === M) {
    results.push(tmp.join(" "));
    return;
  }
  for (let i = 1; i <= N; i++) {
    tmp.push(i);
    backTracking(tmp);
    tmp.pop();
  }
}

console.log(results.join("\n"));
