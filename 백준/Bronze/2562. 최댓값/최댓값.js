const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const data = fs.readFileSync(path).toString().trim().split("\n").map(Number);
const max = Math.max(...data);
const idx = data.indexOf(max) + 1;

console.log(max);
console.log(idx);
