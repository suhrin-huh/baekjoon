const readline = require('readline');

// 입력을 처리하기 위한 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 입력받기
rl.question('', (input) => {
  const N = parseInt(input); // 입력을 숫자로 변환

  // N이 유효한 범위 내인지 확인
    // 별 출력
    for (let i = 1; i <= N; i++) {
      console.log('*'.repeat(i)); // i번 반복해서 별 출력
    }

  rl.close(); // 입력 인터페이스 닫기
});
