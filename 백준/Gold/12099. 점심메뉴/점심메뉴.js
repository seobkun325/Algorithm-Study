const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, Q] = input[0].split(" ").map(Number);
let menus = [];
for (let i = 0; i < N; i++) {
  menus[i] = input[i + 1].split(" ").map(Number);
}
menus.sort((a, b) => a[0] - b[0]); // 정렬된 메뉴 (매운맛기준))

for (let i = 0; i < Q; i++) {
  const [u, v, x, y] = input[i + N + 1].split(" ").map(Number);

  const spicyStart = findPoint(menus, u, 0, 0);
  const spicyEnd = findPoint(menus, v, 0, 1);

  let selectedMenus = menus.slice(spicyStart, spicyEnd + 1);
  let result = 0;
  for (let j = 0; j < selectedMenus.length; j++) {
    if (selectedMenus[j][1] >= x && selectedMenus[j][1] <= y) {
      result += 1;
    }
  }
  console.log(result);
}

// 범위의 시작 혹은 끝 인덱스 제공 함수 (tasteList=배열, key=끝값, typeOfTaste=0:매운맛,1:단맛 , typeOfPoint=0:시작점,1:끝점)
function findPoint(tasteList, key, typeOfTaste, typeOfPoint) {
  let start = 0;
  let end = tasteList.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (tasteList[mid][typeOfTaste] === key) {
      return mid;
    } else if (tasteList[mid][typeOfTaste] > key) {
      end = mid - 1;
    } else if (tasteList[mid][typeOfTaste] < key) {
      start = mid + 1;
    }
  }
  if (typeOfPoint === 0) return end + 1;
  else return end;
}
