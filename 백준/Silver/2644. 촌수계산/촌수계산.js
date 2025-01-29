/**
 * 첫째 줄 : 사람의 수 (n)
 * 둘째 줄 : 촌수를 계산해야하는 서로 다른 두 사람의 번호
 * 셋째 줄 : 관계의 개수 m x: y의 부모
 * 가족 또는 친척들의 관계를 생각해보면 양방향으로 고려 가능
 */

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력을 처리한다.
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const n = input.shift()[0];
const [per1, per2] = input.shift();
const m = input.shift()[0];

const map = Array.from({ length: n + 1 }, () => []);
// n*n 로 만들고 싶을 때에는
// Array.from({length: n}, () => Array(n).fill(0))

const visited = Array(n + 1).fill(0);

for (const [i, j] of input) {
  map[i].push(j);
  map[j].push(i);
}

let answer = 100;

function calculateKinship(now, count) {
  if (count > answer) return;
  if (now == per2) {
    answer = count < answer ? count : answer;
  }
  for (const next of map[now]) {
    if (visited[next]) continue;
    visited[next] = 1;
    calculateKinship(next, count + 1);
    visited[next] = 0;
  }
}

visited[per1] = 1;

calculateKinship(per1, 0);
if (answer == 100) {
  console.log(-1);
} else {
  console.log(answer);
}
