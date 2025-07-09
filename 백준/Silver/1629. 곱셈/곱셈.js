 const fs = require('fs');
 const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
 
 const [a,b,c] = fs.readFileSync(path).toString().trim().split(" ").map(BigInt);
 
 function modPow (base, exponent, mod) {
     // base를 exponent 번 곱한 수를 mod로 나눈 나머지를 구하기 위한 방법
 
     let result = 1n; // 지수가 0 인경우 1을 반환
     // 기본적으로 우선 모든 base들을 나머지로 처리해준다.     
     base = base % mod; // base를 mod로 나눈 나머지
 
     while (exponent > 0n) {
         // 2개씩 묶었을 때 남는게 있는 경우, 그 때의 base를 result에 곱해주고 나머지를 구한다.
         if (exponent % 2n == 1n) {
             result = (result * base) % mod
         }
         // 묶음의 기준을 변경해준다.
         base = (base * base) % mod;
         // 나머지는 위에서 처리하기 때문에 묶음의 수만 계속 변경해주면 된다.
         exponent /= 2n
     }
     return result;
 }
 
 
 console.log(Number(modPow(a, b, c)));