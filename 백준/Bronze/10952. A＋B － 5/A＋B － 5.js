const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (lst of input) {
  const [a, b] = lst;
  if (a + b == 0) return;
  console.log(a + b);
}
