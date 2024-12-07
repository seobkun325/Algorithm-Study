const fs = require("fs");
const [first, second] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
/*
기호	I   V	  X	  L	   C	  D	  M
값	 1	 5	 10	 50	 100	500	1000
*/
const table = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const arabiaToRomanTable = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

const answerArabia = RomanToArabia(first) + RomanToArabia(second);
const answerRoman = ArabiaToRoman(answerArabia);

console.log(answerArabia);
console.log(answerRoman);

function RomanToArabia(Roman) {
  let Arabia = 0;
  for (let i = 0; i < Roman.length; i++) {
    if (i < Roman.length - 1 && table[Roman[i]] < table[Roman[i + 1]]) {
      Arabia -= table[Roman[i]];
    } else {
      Arabia += table[Roman[i]];
    }
  }
  return Arabia;
}

function ArabiaToRoman(Arabia) {
  let Roman = "";
  for (const [value, numberStr] of arabiaToRomanTable) {
    while (Arabia >= value) {
      Roman += numberStr;
      Arabia -= value;
    }
  }
  return Roman;
}