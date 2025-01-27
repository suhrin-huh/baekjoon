const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력을 처리한다.
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

//   .map((el) => el.split(" ").map(Number));

// 한 정사각형과 가로, 세로 또는 대각선으로 연결되어 있는 사각형은 걸어갈 수 있는 사각형이다.
// const delta = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];

// 1은 땅, 2는 바다

// 여러개의 TC가 존재한다.
// 너비 w(열) 와 높이 h(행) 가 주어진다.
// 입력의 마지막 줄에는 0이 두 개'0 0' 주어진다.

// 우선은 내가 TC 별로 구분해서 입력받을 수 있는지 테스트해보자!

while (true) {
  // 가로와 세로의 크기를 입력받는다.
  const [width, height] = input.shift();

  // 0 0이 들어오면 끝난다.
  if (width == 0 && height == 0) break;

  // 섬의 개수를 반환받으면 출력한다.
  const answer = checkIsland(width, height);
  console.log(answer);
}

// checkIsland : 섬의 개수를 체크하는 함수
function checkIsland(w, h) {
  // 높이가 행이 되므로 map을 다음과 같이 설계한다.
  const map = Array.from({ length: h }, () => input.shift());
  // 섬의 수를 저장할 변수 count
  let count = 0;

  // 순회
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      // 섬을 발견한다면
      if (map[i][j]) {
        count += 1;
        // 연결된 땅 처리
        traverse([i, j]);
      }
    }
  }
  return count;

  function traverse(st) {
    const q = [];
    q.push(st);
    const delta = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    while (q.length) {
      const [y, x] = q.shift();
      for ([dy, dx] of delta) {
        const ny = y + dy;
        const nx = x + dx;
        if (ny < 0 || ny >= h || nx < 0 || nx >= w) continue;
        if (!map[ny][nx]) continue;
        map[ny][nx] = 0;
        q.push([ny, nx]);
      }
    }
  }
}
