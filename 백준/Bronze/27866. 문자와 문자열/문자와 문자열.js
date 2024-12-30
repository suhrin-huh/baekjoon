const fs = require("fs");
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [word, idx] = input;
console.log(word.at(Number(idx) - 1));