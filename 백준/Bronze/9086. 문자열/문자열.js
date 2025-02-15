const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path).toString().trim().split("\n");

const tc = Number(input.shift());

while (input.length) {
  let answer = "";
  const word = input.shift().trim().split("");
  answer += word.at(0);
  answer += word.at(-1);
  console.log(answer);
}
