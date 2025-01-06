const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path).toString().trim();
const num = Number(input);

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

const answer = factorial(num);
console.log(answer);
