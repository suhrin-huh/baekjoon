const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 첫째 줄에서 M, N, H를 추출
const [M, N, H] = input[0].split(' ').map(Number);

// 3차원 배열과 큐 초기화
const dx = [-1, 1, 0, 0, 0, 0];  // 좌,우,상,하,앞,뒤일 때 x좌표
const dy = [0, 0, -1, 1, 0, 0]; // 좌,우,상,하,앞,뒤일 때 y좌표
const dz = [0, 0, 0, 0, -1, 1]; // 좌,우,상,하,앞,뒤일 때 z좌표 (상자 인덱스)
const queue = [];
const boxes = Array.from(Array(H), () => Array.from(Array(N), () => Array(M).fill(0)));

let inputIdx = 1; // input의 현재 위치
let unripeTomato = 0;

// 3차원 배열에 입력값 삽입
for (let i = 0; i < H; i++) {
  for (let j = 0; j < N; j++) {
    boxes[i][j] = input[inputIdx++].split(' ').map(Number);
    for (let k = 0; k < M; k++) {
      if (boxes[i][j][k] === 0) {
        unripeTomato++; // 익지 않은 토마토 개수 카운트
      }
      if (boxes[i][j][k] === 1) {
        queue.push([i, j, k, 0]); // 익은 토마토를 큐에 추가
      }
    }
  }
}

let idx = 0; // 큐의 현재 인덱스
let answer = 0;

// BFS 수행
while (queue.length > idx) {
  const [z, x, y, days] = queue[idx++];

  // 현재 위치 기준으로 인접한 여섯 방향 탐색
  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];

    // 상자의 범위를 벗어나지 않으며, 안 익은 토마토가 있는 경우
    if (nz >= 0 && nz < H && nx >= 0 && nx < N && ny >= 0 && ny < M && boxes[nz][nx][ny] === 0) {
      boxes[nz][nx][ny] = 1; // 토마토 익히기
      queue.push([nz, nx, ny, days + 1]); // 큐에 새로운 위치와 걸린 일수 추가
      unripeTomato--; // 안 익은 토마토 개수 감소
    }
  }
  answer = days; // 마지막으로 갱신된 days가 최종 일수
}

// 모든 토마토가 익었는지 확인
console.log(unripeTomato > 0 ? -1 : answer);
