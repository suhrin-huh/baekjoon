const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const [info, lst] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const standard = info[1];
const answer = [];

for (const num of lst) {
  if (num < standard) {
    answer.push(num);
  }
}

console.log(...answer);
