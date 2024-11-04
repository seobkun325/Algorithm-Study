const fs = require("fs");
const G = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

/*
일단 기본적인 접근 방법은 1, 4, 9, 16, 25 ... 100 ... 256 ...
이렇게 제곱수들을 쭉 저장해두고, for문을 돌리던, 투포인터를 쓰던 하면서
탐색을 해야하는데, 이 제곱수를 어디 까지 저장할것인가?
=> 마지막 두개의 차가 G수보다 커지는 순간 끊으면 된다.
어차피 그 이후로는 G수를 못만든다.
*/

const numList = [];
let i = 1;
while (true) {
  if (i ** 2 - (i - 1) ** 2 > G) break;
  numList.push(i ** 2);
  i += 1;
}

// 투포인터로 쌍 찾아서 정답 리스트에 넣고, 리스트 크기가 정답
const answer = [];
let [head, tail] = [0, 0];
while (tail < numList.length) {
  tmp = numList[tail] - numList[head];
  if (tmp === G) {
    answer.push(tail + 1);
    head += 1;
  }
  // G 보다 작을때
  if (tmp < G) {
    tail += 1;
  }
  if (tmp > G) {
    head += 1;
  }
}
if (answer.length > 0) {
  console.log(answer.join("\n"));
} else {
  console.log(-1);
}
