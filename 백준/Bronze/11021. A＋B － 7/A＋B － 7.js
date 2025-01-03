const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [TC, ...data] = input;
const tc = TC.at(0);
const answer = data.map((el) => el.at(0) + el.at(1));

for (let i = 1; i <= tc; i++) {
  console.log(`Case #${i}: ${answer.at(i - 1)}`);
}