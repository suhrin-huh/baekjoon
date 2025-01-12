const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const [N, data] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let min = 1000000;
let max = -1000000;
/**
 * Do you mean Switch statements are not suitable logical comparisons?
 * 
 * => Yes, that's correct.
 * Switch statements in JavaScript are not suitable for logical comparisons like <, >, or <=.
 * They are designed to match strict values, not conditions.

// for (const num of data) {
//   console.log(num);
//   switch (num) {
//     case num < min:
//       min = num;
//     case num > max:
//       max = num;
//       break;
//     default:
//       break;
//   }
// }

 */

for (const num of data) {
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
}

console.log(min, max);
