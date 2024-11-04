const fs = require("fs");
const [N, ...S] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = [];
let [head, tail] = [0, N - 1];

while (T.length < S.length) {
  if (S[head] < S[tail]) {
    T.push(S[head]);
    head += 1;
  } else if (S[head] > S[tail]) {
    T.push(S[tail]);
    tail -= 1;
  } else {
    let left = head;
    let right = tail;
    let chooseHead = false;

    while (left < right) {
      if (S[left] < S[right]) {
        chooseHead = true;
        break;
      } else if (S[left] > S[right]) {
        chooseHead = false;
        break;
      }
      left += 1;
      right -= 1;
    }

    if (chooseHead) {
      T.push(S[head]);
      head += 1;
    } else {
      T.push(S[tail]);
      tail -= 1;
    }
  }
}

const result = T.join("");
for (let i = 0; i < result.length; i += 80) {
  console.log(result.slice(i, i + 80));
}
