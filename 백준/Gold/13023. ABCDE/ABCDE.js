const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const relationship = Array.from({ length: N }, () => []);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  relationship[a].push(b);
  relationship[b].push(a);
}

let status = false;
const visited = Array(N).fill(false);

for (let i = 0; i < N; i++) {
  if (status) break;
  dfs(i, 0);
}

console.log(status ? 1 : 0);

function dfs(node, depth) {
  if (depth === 4) {
    status = true;
    return;
  }
  visited[node] = true;
  for (const neighbor of relationship[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor, depth + 1);
      if (status) return;
    }
  }
  visited[node] = false;
}
