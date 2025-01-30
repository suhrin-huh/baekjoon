const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const data = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [m, n] = data.shift();

// DP 배열 (-1: 아직 방문 안 함)
const dp = Array.from({ length: m }, () => Array(n).fill(-1));

const delta = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

// DFS + DP (메모이제이션)
function countPaths(i, j) {
  // 도착점 도달 시 경로 1개 추가
  if (i === m - 1 && j === n - 1) return 1;

  // 이미 방문한 적 있으면 저장된 값 반환
  if (dp[i][j] !== -1) return dp[i][j];

  let totalPaths = 0;
  
  for (const [di, dj] of delta) {
    const ni = i + di;
    const nj = j + dj;
    if (ni < 0 || ni >= m || nj < 0 || nj >= n) continue;
    if (data[ni][nj] >= data[i][j]) continue; // 더 높은 곳은 방문 불가

    totalPaths += countPaths(ni, nj);
  }

  // DP 배열에 저장 후 반환
  dp[i][j] = totalPaths;
  return dp[i][j];
}

console.log(countPaths(0, 0));
