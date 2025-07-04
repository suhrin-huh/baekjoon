const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const data = fs.readFileSync(path).toString().trim().split(" ").map(Number);

const [n, m] = data;
const answers = [];
function dfs(level, arr) {
  if (level == m) {
    answers.push(arr.join(" "));
    return;
  }

  for (let next = 1; next <= n; next++) {
    arr.push(next);
    dfs(level + 1, arr);
    arr.pop();
  }
}

dfs(0, []);

console.log(answers.join("\n"));
