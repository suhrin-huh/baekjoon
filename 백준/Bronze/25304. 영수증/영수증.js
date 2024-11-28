const input = require("fs")
  .readFileSync(process.platform == "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [total] = input[0];
const [n] = input[1];
const list = input.slice(2);

let calculSum = 0;
for (let i = 0; i < n; i++) {
  const [price, cnt] = list[i];
  calculSum += price * cnt;
}

if (total == calculSum) {
  console.log("Yes");
} else {
  console.log("No");
}
