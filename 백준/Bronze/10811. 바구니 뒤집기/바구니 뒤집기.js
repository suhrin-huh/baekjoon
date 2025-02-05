const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// n: 바구니 개수, m: 바구니 뒤집는 횟수
const [n, m] = input[0].split(" ").map(Number);

// 1부터 n까지 바구니 생성
let basket = Array.from({ length: n }, (_, i) => i + 1);

// m번 반복
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  // 바구니 a~b 구간을 뒤집기
  basket.splice(a - 1, b - a + 1, ...basket.slice(a - 1, b).reverse());
}

// 결과 출력
console.log(basket.join(" "));
