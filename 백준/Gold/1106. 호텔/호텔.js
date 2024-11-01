const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//const input = fs.readFileSync("./stdin.txt").toString().trim().split("\n");

const [C, N] = input[0].split(" ").map(Number);

// 광고 정보 분리
const advertiseData = [];
for (let i = 1; i <= N; i++) {
  advertiseData.push(input[i].split(" ").map(Number));
}

// 최고 효율 광고 순으로 정렬(cost/people)
// 1. 최고 효율의 광고부터 DP에 갱신하기 위해
// 2. DP의 최대 인덱스를 최고효율로만 목표인원수를 넘길때까지로 지정하기 위해 최고 효율 광고 필요
advertiseData.sort((a, b) => b[1] / b[0] - a[1] / a[0]);
let DP = Array(
  Math.ceil(C / advertiseData[0][1]) * advertiseData[0][1] + 1
).fill(Infinity);
DP[0] = 0;
for (let ad of advertiseData) {
  for (let i = 0; i < DP.length - ad[1]; i++) {
    if (DP[i] !== Infinity) {
      DP[i + ad[1]] = Math.min(DP[i + ad[1]], DP[i] + ad[0]);
    }
  }
}
// C 부터 DP 인덱스 끝까지 중 가장 적은 cost 출력
console.log(Math.min(...DP.slice(C)));
