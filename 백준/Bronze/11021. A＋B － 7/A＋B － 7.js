const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path).toString().trim().split("\n");
const tc = Number(input[0]); // Number of test cases
const data = input.slice(1).map((line) => line.split(" ").map(Number)); // Parse test case data

for (let i = 1; i <= tc; i++) {
  const [a, b] = data[i - 1]; // Access each test case
  console.log(`Case #${i}: ${a + b}`); // Output the result
}