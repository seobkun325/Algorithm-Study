const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [A, B, C, D] = input[0].split(" ").map(Number); 
const [P, M, N] = input[1].split(" ").map(Number);

function isAttacked(time, attack, rest) {
  const cycle = attack + rest; 
  const positionInCycle = time % cycle; 
  return positionInCycle > 0 && positionInCycle <= attack; 
}

function calculateAttacks(time) {
  let count = 0;
  if (isAttacked(time, A, B)) count++; 
  if (isAttacked(time, C, D)) count++; 
  return count;
}

console.log(calculateAttacks(P));
console.log(calculateAttacks(M)); 
console.log(calculateAttacks(N)); 
