const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const num = Number(fs.readFileSync(path).toString().trim());
/** 첫번째 우선은 구해보자! */

function fibonacci(n) {
  if (n >= 2) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  } else if (n == 1) {
    return 1;
  } else {
    return 0;
  }
}

console.log(fibonacci(num));
