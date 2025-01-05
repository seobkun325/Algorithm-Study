const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let stack = [];
let ans = "";
let isOpen = false;

for (let x of input) {
  if (x === "<") {
    // 태그가 열리면 스택에 남아있는 문자들 추가
    while (stack.length > 0) {
      ans += stack.pop();
    }
    isOpen = true;
    ans += x; // '<' 추가
  } else if (x === ">") {
    isOpen = false;
    ans += x; // '>' 추가
  } else if (x === " " && !isOpen) {
    // 공백 처리 (태그 밖에서만 뒤집기)
    while (stack.length > 0) {
      ans += stack.pop();
    }
    ans += " "; // 공백 추가
  } else {
    // 태그 안이거나 단어를 쌓기
    if (isOpen) {
      ans += x;
    } else {
      stack.push(x);
    }
  }
}

// 남아있는 스택 처리
while (stack.length > 0) {
  ans += stack.pop();
}

console.log(ans);
