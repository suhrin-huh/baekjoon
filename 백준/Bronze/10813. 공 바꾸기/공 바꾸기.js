const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [n, m] = input.shift();
const basket = Array.from({ length: n }, (_, idx) => idx + 1);

function switchBall(a, b) {
  [basket[a - 1], basket[b - 1]] = [basket[b - 1], basket[a - 1]];
}

for (const [i, j] of input) {
  switchBall(i, j);
}

console.log(basket.join(" "));
