const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const N = Number(input.shift()[0]);
const lst = input.shift();
const num = input.shift()[0];

let answer = 0;

for (const i of lst) {
  if (i == num) {
    answer += 1;
  }
}

console.log(answer);
