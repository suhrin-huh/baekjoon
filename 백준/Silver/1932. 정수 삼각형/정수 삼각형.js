const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const data = fs.readFileSync(path).toString().trim().split("\n");

const n = Number(data.shift());

// 삼각형의 숫자 데이터를 담은 행렬
const triangle = data.map((e) => e.split(" ").map(Number));

function calculator(arr) {
  // 각 위치별 최대값을 저장할 행렬
  const answers = Array.from({ length: n }, () => Array(n).fill(0));
  answers[0][0] = arr[0][0];

  // 첫번째 줄부터 자신의 위치에서 바로 아래와 대각선 아래의 answers를 갱신
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j <= i; j++) {
      // 자신의 아래에 위치한 곳까지 도달했을 때 합의 최대값
      answers[i + 1][j] = Math.max(
        answers[i][j] + arr[i + 1][j],
        answers[i + 1][j]
      );
      answers[i + 1][j + 1] = Math.max(
        answers[i][j] + arr[i + 1][j + 1],
        answers[i + 1][j + 1]
      );
    }
  }
  return Math.max(...answers[n - 1]);
}

console.log(calculator(triangle));