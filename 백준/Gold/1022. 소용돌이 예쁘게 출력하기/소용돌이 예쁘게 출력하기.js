const fs = require("fs");
const [r1, c1, r2, c2] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

// 값 계산 함수
function gridValue(row, col) {
  const layer = Math.max(Math.abs(row), Math.abs(col)); // 해당 좌표의 layer
  if (layer === 0) {
    return 1;
  }
  const end = (2 * layer + 1) ** 2;

  if (row === layer) {
    // 아래쪽 면
    return end - (layer - col);
  } else if (col === -layer) {
    // 왼쪽 면
    return end - 2 * layer - (layer - row);
  } else if (row === -layer) {
    // 위쪽 면
    return end - 4 * layer - (col - -layer);
  } else {
    // 오른쪽 면
    return end - 6 * layer - (row - -layer);
  }
}

const grid = [];
let maxLength = 0;

for (let i = r1; i <= r2; i++) {
  const row = [];
  for (let j = c1; j <= c2; j++) {
    const value = gridValue(i, j);
    row.push(value);
    maxLength = Math.max(maxLength, value.toString().length);
  }
  grid.push(row);
}

for (const row of grid) {
  const result = row.map((value) => value.toString().padStart(maxLength, " ")).join(" ");
  console.log(result);
}
