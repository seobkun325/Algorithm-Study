const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const tree = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i < N; i++) {
  const [a, b, val] = input[i].split(" ").map(Number);
  tree[a].push([b, val]);
  tree[b].push([a, val]);
}
if (N === 1) {
  console.log(0);
} else {
  let firstPoint = [0, -1];
  let visited = Array(N + 1).fill(false);
  visited[1] = true;
  dfs(1, 0);
  const firstNode = firstPoint[1];
  firstPoint = [0, -1];
  visited[1] = false;
  visited[firstNode] = true;
  dfs(firstNode, 0);
  console.log(firstPoint[0]);
  function dfs(node, value) {
    if (tree[node].length === 1 && visited[tree[node][0][0]]) {
      if (firstPoint[0] < value) {
        firstPoint = [value, node];
      }
      return;
    }
    for (const [next, len] of tree[node]) {
      if (visited[next]) continue;
      visited[next] = true;
      dfs(next, value + len);
      visited[next] = false;
    }
  }
}
