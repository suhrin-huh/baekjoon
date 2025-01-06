const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path).toString().trim();
const num = Number(input);
const word = "*";

for (let i = 1; i <= num; i++) {
  console.log(word.repeat(i));
}