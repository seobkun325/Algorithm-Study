const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);
const n = parseInt(input[1]);
const A = input[2].split(" ").map(Number);
const m = parseInt(input[3]);
const B = input[4].split(" ").map(Number);

// 모든 부배열 합을 계산
function subArraySum(array) {
  const subarraySums = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      sum += array[j];
      subarraySums.push(sum);
    }
  }
  return subarraySums;
}

const aSubarraySums = subArraySum(A);
const bSubarraySums = subArraySum(B);
// console.log(aSubarraySums, bSubarraySums);

// A의 부 배열 등장횟수 카운트
const aSumCount = new Map();
for (const sum of aSubarraySums) {
  aSumCount.set(sum, (aSumCount.get(sum) || 0) + 1);
}

// B의 부 배열 합과 T - B 합 계산
let count = 0;
for (const sum of bSubarraySums) {
  const target = T - sum;
  if (aSumCount.has(target)) {
    count += aSumCount.get(target); // 가능한 쌍의 개수 추가
  }
}

console.log(count);
