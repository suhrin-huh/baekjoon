/**
 * 세로 R(20이하) 가로 C(20이하)로 된 표 모양의 보드가 있다.
 * 대문자 알파벳이 적혀있다.
 * 상하좌우로만 움직일 수 있다.
 * const delta = [[0,1], [1,0], [-1,0], [0,-1]];
 * 시작 위치는 좌측 상단으로 고정
 * 같은 알파벳이 적힌 칸을 두 번 지날 수 없음
 * => 체크가 필요하다.
 * object로 체크하자.
 */

// 데이터를 입력받고, 문제 풀이에 맞게 r,c 값과 map 정보를 입력받는다.
const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(path).toString().trim().split("\n");
const [r, c] = input.shift().trim().split(" ").map(Number);
// 문자열이므로 굳이 split 처리할 필요 X
const map = Array.from({ length: r }, () => input.shift());

// 방문 여부를 체크할 객체 생성하기
const visited = {};
for (let i = 65; i <= 90; i++) {
  const key = String.fromCharCode(i); // 아스키 코드로 문자 생성
  visited[key] = 0;
}

let answer = 0;

const delta = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function dfs(i, j, count) {
  if (count > answer) {
    answer = count;
  }
  for (const [di, dj] of delta) {
    const ni = i + di;
    const nj = j + dj;
    // 보드를 넘어가면 중단
    if (ni < 0 || ni >= r || nj < 0 || nj >= c) continue;
    const alphabet = map[ni][nj];
    // 이미 지나간 알파벳이면 중단
    if (visited[alphabet]) continue;
    // 지나간 적 없는 알파벳이라면 이동
    visited[alphabet] = 1;
    dfs(ni, nj, count + 1);
    // 다른 경로 파악 위해서 원상태로 복원
    visited[alphabet] = 0;
  }
}
const now = map[0][0];
visited[now] = 1;
dfs(0, 0, 1);
console.log(answer);
