const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const data = fs.readFileSync(path).toString().trim().split("\n").map(Number);

const checked = Array.from({ length: 42 }, () => 0);
let answer = 0;

for (const num of data) {
  const remainder = num % 42;
  if (!checked[remainder]) {
    checked[remainder] = 1;
    ++answer;
  }
}
console.log(answer);
