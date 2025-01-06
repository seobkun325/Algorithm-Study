const fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

const iter = inputs.length;

let ans = [];

for(let i = 0; i < iter; i++){
    let input = inputs[i].split("");
    
    // 만약 빈 문자열이 들어오면 다음 문자열로 넘겨준다.
    if(input.length === 0) continue;
    
    // 배열의 각 원소는 소문자, 대문자, 숫자, 공백의 개수를 의미함.
    let strArr = [0,0,0,0];
    
    for(let str of input){
        let ascii = str.charCodeAt();
        
        if(ascii >= 97 && ascii <= 122){
            strArr[0]++;
        } else if(ascii >= 65 && ascii <= 90){
            strArr[1]++;
        } else if(ascii >= 48 && ascii <= 57){
            strArr[2]++;
        } else if(ascii === 32) {
            strArr[3]++;
        }
    }
    
    ans.push(strArr.join(" "));
}

console.log(ans.join("\n"));