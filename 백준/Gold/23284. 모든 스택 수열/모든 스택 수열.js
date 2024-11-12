const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const numList = [];
for (let i = N; i >= 1; i--) {
  numList.push(i);
}

backTracking(numList, [], []);

function backTracking(numList, stack, ansList) {
  if (ansList.length === N) {
    console.log(ansList.join(" "));
    return;
  }
  // 0: stack에 push,  1: stack에서 pop
  for (let i = 0; i <= 1; i++) {
    //stack에 push : numList에서 pop -> stack에 push
    if (i === 1) {
      // 뺄 수가 없으면 리턴
      if (numList.length === 0) continue;

      const numFromNumlist = numList.pop();
      stack.push(numFromNumlist);
      backTracking(numList, stack, ansList);
      stack.pop();
      numList.push(numFromNumlist);
    } else {
      // 뺄 수가 없으면 리턴
      if (stack.length === 0) continue;

      // stack에서 pop : stack에서 pop -> ansList에 push
      const numFromStack = stack.pop();
      ansList.push(numFromStack);
      backTracking(numList, stack, ansList);
      ansList.pop();
      stack.push(numFromStack);
    }
  }
}
