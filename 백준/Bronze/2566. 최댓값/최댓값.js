const fs = require("fs").readFileSync(
  process.platform == "linux" ? "/dev/stdin" : "./input.txt"
);
const input = fs
  .toString() // Convert to string
  .trim() // Trim whitespace
  .split("\n") // Split by newline
  .map((el) => el.split(" ").map(Number)); // Convert each element to number

let answer = Number.MIN_SAFE_INTEGER; // Initialize to the smallest safe number
const position = { x: null, y: null }; // Initialize position

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] > answer) { // Compare current number
      answer = input[i][j]; // Update maximum number
      position["x"] = i + 1; // Update row (1-based index)
      position["y"] = j + 1; // Update column (1-based index)
    }
  }
}

console.log(answer); // Print the maximum value
console.log(`${position["x"]} ${position["y"]}`); // Print its position
