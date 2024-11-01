const fs = require("fs");
const path = "/dev/stdin";
// const path = "./stdin.txt";
const [N, r, c] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let ans = 0;
let [headR, tailR, headC, tailC] = [0, 2 ** N, 0, 2 ** N];
while (true) {
  const zSize = (tailR - headR) / 2;
  const midR = (headR + tailR) / 2;
  const midC = (headC + tailC) / 2;
  if (r < midR && c < midC) {
    tailR = midR;
    tailC = midC;
  } else if (r < midR && c >= midC) {
    tailR = midR;
    headC = midC;
    ans += zSize ** 2;
  } else if (r >= midR && c < midC) {
    headR = midR;
    tailC = midC;
    ans += 2 * zSize ** 2;
  } else {
    headR = midR;
    headC = midC;
    ans += 3 * zSize ** 2;
  }
  if (zSize === 1) {
    console.log(ans);
    break;
  }
}
