const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path).toString().trim().split(" ").map(Number);

const [n, m] = input;

// 1부터 n까지 자연수 중에서 중복 없이 M개를 고른 수열, 오름차순 출력
function generateSequences(N, M) {
  const result = []; // 결과를 저장할 배열
  const sequence = []; // 현재 수열을 저장할 배열
  const visited = Array(N + 1).fill(false); // 중복 방지를 위한 방문 배열

  function backtrack(depth) {
    // 길이가 M인 수열이 완성되면 결과에 추가
    if (depth === M) {
      console.log(sequence.join(" "));
      result.push([...sequence]);
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!visited[i]) {
        visited[i] = true; // 현재 숫자 사용 표시
        sequence.push(i); // 수열에 추가
        backtrack(depth + 1); // 다음 단계로 이동
        sequence.pop(); // 되돌리기
        visited[i] = false; // 방문 표시 해제
      }
    }
  }

  backtrack(0); // 백트래킹 시작
  return result;
}

generateSequences(n, m);
