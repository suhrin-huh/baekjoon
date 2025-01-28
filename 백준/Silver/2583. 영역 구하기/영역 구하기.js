// m,n (<= 100)
// K개의 직사각형을 그리면 나머지 부분이 분리된 영역으로 나누어진다.
/**
 * m,n,k 가 주어진다.
 * k 개의 줄에는 왼쪽아내 꼭칫점의 (x,y) , 오른쪽 위 (x,y)가 주어짐
 *
 */

const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [m, n, k] = input.shift();

const map = Array.from({ length: m }, () => new Array(n).fill(0));

for (const [sx, sy, ex, ey] of input) {
  for (let y = sy; y < ey; y++) {
    for (let x = sx; x < ex; x++) {
      map[y][x] = 1;
    }
  }
}

const answer = [];

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] == 1) continue;
    map[i][j] = 1;
    answer.push(bfs([i, j]));
  }
}

function bfs(st) {
  const q = [st];
  let count = 1;
  const delta = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  while (q.length) {
    const [y, x] = q.shift();
    for (const [dy, dx] of delta) {
      const ny = y + dy;
      const nx = x + dx;
      if (ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
      if (map[ny][nx]) continue;
      map[ny][nx] = 1;
      q.push([ny, nx]);
      count += 1;
    }
  }

  return count;
}

answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(...answer);
