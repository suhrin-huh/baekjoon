 const fs = require('fs');
 const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
 
 const data = fs.readFileSync(path).toString().trim().split('\n').map(e => e.trim().split(' ').map(Number));
 const [n, k] = data.shift();
 const dp = Array(k+1).fill(0);
 
 while (data.length) {
     const [w,v] = data.shift();
 
     for (let i = k; i >= w; i--) { 
         dp[i] = Math.max(dp[i], dp[i-w]+ v)
     }
 }
 
 console.log(dp[k]);