const fs = require("fs");
 
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

function isBalanced(line) {
  const stack = [];

  for (const char of line) {
    if (char === '(' || char === '[') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.pop() !== '(') return false;
    } else if (char === ']') {
      if (stack.pop() !== '[') return false;
    }
  }

  return stack.length === 0;
}

const results = [];

for (const line of input) {
  if (line === ".") break;
  results.push(isBalanced(line) ? "yes" : "no");
}

console.log(results.join("\n"));