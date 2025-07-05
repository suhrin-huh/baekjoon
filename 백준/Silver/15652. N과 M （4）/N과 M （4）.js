const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const data = fs.readFileSync(path).toString().trim().split(" ").map(Number);

const [n, m] = data;
const answers = [];
function dfs(level,now, arr) {
  if (level == m) {
    answers.push(arr.join(" "));
    return;
  }

  for (let next = now; next <= n; next++) {
    arr.push(next);
    dfs(level + 1,next, arr);
    arr.pop();
  }
}

dfs(0,1,[]);

console.log(answers.join("\n"));
