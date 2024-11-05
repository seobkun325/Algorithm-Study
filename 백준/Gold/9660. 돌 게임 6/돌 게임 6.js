const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

if (N % 7 === 0 || N % 7 === 2) console.log("CY");
else console.log("SK");
