const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());
console.log(factorial(N));
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
