const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const data = fs.readFileSync(path).toString().trim().split("\n");

const [n, m] = data.shift().trim().split(" ").map(Number);

const numbers = data.shift().trim().split(" ").map(Number);

numbers.sort((a, b) => a - b); // 반환값 사용 X. 직접적으로 배열을 바꿈

const visited = Array(n).fill(0);

const answers = [];

// 이거.. console.log() 어케하다했더라...ㅎㅎㅎ
function dfs(level, arr) {
  if (level == m) {
    answers.push(arr.join(" "));
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = 1;
    arr.push(numbers[i]);
    dfs(level + 1, arr);
    arr.pop();
    visited[i] = 0;
  }
}

dfs(0, []);

console.log(answers.join("\n"));
