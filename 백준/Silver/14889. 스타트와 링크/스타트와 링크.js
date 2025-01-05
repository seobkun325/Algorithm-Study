const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = [];
for (let i = 0; i < N; i++) {
  const line = input[i + 1].split(" ").map(Number);
  arr.push(line);
}

let minDiff = Infinity;
divideTeam(0, []);

// 팀 나누기
function divideTeam(start, team) {
  // 팀 선별 종료조건
  if (team.length === N / 2) {
    const oppositeTeam = [];
    for (let i = 0; i < N; i++) {
      if (!team.includes(i)) {
        oppositeTeam.push(i);
      }
    }

    const teamSum = calculateTeamScore(team);
    const oppositeSum = calculateTeamScore(oppositeTeam);

    minDiff = Math.min(minDiff, Math.abs(teamSum - oppositeSum));
    return;
  }

  for (let i = start; i < N; i++) {
    team.push(i);
    divideTeam(i + 1, team);
    team.pop();
  }
}

// 팀 점수 계산
function calculateTeamScore(team) {
  let sum = 0;
  for (let i = 0; i < team.length; i++) {
    for (let j = i + 1; j < team.length; j++) {
      const a = team[i];
      const b = team[j];
      sum += arr[a][b] + arr[b][a]; // 양방향 점수 합산
    }
  }
  return sum;
}

console.log(minDiff);
