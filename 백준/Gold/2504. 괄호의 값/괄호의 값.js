const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

let answer = 0;
let tmp = 1;
const stack = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push(input[i]);
    tmp *= 2;
  } else if (input[i] === "[") {
    stack.push(input[i]);
    tmp *= 3;
  } else if (input[i] === ")") {
    // 스택이 비어있거나, 가장 마지막이 '('가 아니면 잘못된 입력
    if (!stack.length || stack[stack.length - 1] !== "(") {
      answer = 0;
      break;
    }
    // 이전 요소가 '('이면 현재 tmp 값을 answer에 더해줌
    if (input[i - 1] === "(") {
      answer += tmp;
    }
    stack.pop();
    tmp /= 2;
  } else if (input[i] === "]") {
    // 스택이 비어있거나, 가장 마지막이 '['가 아니면 잘못된 입력
    if (!stack.length || stack[stack.length - 1] !== "[") {
      answer = 0;
      break;
    }
    // 이전 요소가 '['이면 현재 tmp 값을 answer에 더해줌
    if (input[i - 1] === "[") {
      answer += tmp;
    }
    stack.pop();
    tmp /= 3;
  }
}

// 스택이 비어있지 않다면 올바르지 않은 괄호 구조
if (stack.length) {
  answer = 0;
}
console.log(answer);
