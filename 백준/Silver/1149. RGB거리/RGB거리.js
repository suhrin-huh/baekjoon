 const fs = require('fs');
 const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
 const data = fs.readFileSync(path).toString().trim().split('\n').map(e => e.trim().split(' ').map(Number));
 
 const [n] = data.shift();
 
 const dp = Array.from({length:n}, () => Array(3).fill(0));
 
 dp[0] = [...data[0]];
 
 for (let i = 1; i < n; i++) {
     for (let j = 0; j < 3; j++) {
         if (j == 0) {
             dp[i][j] = data[i][j] + Math.min(dp[i-1][1], dp[i-1][2])
         } else if (j == 1) {
             dp[i][j] = data[i][j] + Math.min(dp[i-1][0], dp[i-1][2])
         } else {
             dp[i][j] = data[i][j] + Math.min(dp[i-1][0], dp[i-1][1])
         }
     }
 };
 
 console.log(Math.min(...dp[n-1]));