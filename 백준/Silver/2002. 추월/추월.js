const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const inCars = {};
const outCars = {};

// 입차
for (let i = 1; i <= N; i++) {
  const car = input[i];
  inCars[car] = i;
}
// 출차
const outKeys = [];
for (let i = N + 1; i < input.length; i++) {
  const car = input[i];
  outCars[car] = i - N;
  outKeys.push(car);
}
// 추월 횟수 계산
let count = 0;
for (let i = 0; i < outKeys.length - 1; i++) {
  const nowIn = inCars[outKeys[i]];
  for (let j = i + 1; j < outKeys.length; j++) {
    const nextIn = inCars[outKeys[j]];
    if (nextIn < nowIn) {
      count += 1;
      break;
    }
  }
}
console.log(count);
