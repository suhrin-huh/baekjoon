const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const n = parseInt(input[line++]);
  const top = input[line++].split(" ").map(Number);
  const bottom = input[line++].split(" ").map(Number);

  if (n === 1) {
    console.log(Math.max(top[0], bottom[0]));
    continue;
  }

  const dpTop = Array(n).fill(0);
  const dpBottom = Array(n).fill(0);

  dpTop[0] = top[0];
  dpBottom[0] = bottom[0];

  dpTop[1] = bottom[0] + top[1];
  dpBottom[1] = top[0] + bottom[1];

  for (let i = 2; i < n; i++) {
    dpTop[i] = Math.max(dpBottom[i - 1], dpBottom[i - 2]) + top[i];
    dpBottom[i] = Math.max(dpTop[i - 1], dpTop[i - 2]) + bottom[i];
  }

  console.log(Math.max(dpTop[n - 1], dpBottom[n - 1]));
}
