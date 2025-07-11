const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [n, m] = input[0];
const board = input.slice(1, n + 1);
const queries = input.slice(n + 1);

// 누적합 배열 선언 (1-indexed)
const prefix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

// 누적합 구하기
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    prefix[i][j] =
      prefix[i - 1][j] +
      prefix[i][j - 1] -
      prefix[i - 1][j - 1] +
      board[i - 1][j - 1];
  }
}

// 쿼리 처리
const results = [];
for (let [x1, y1, x2, y2] of queries) {
  const sum =
    prefix[x2][y2] -
    prefix[x1 - 1][y2] -
    prefix[x2][y1 - 1] +
    prefix[x1 - 1][y1 - 1];
  results.push(sum);
}

console.log(results.join("\n"));