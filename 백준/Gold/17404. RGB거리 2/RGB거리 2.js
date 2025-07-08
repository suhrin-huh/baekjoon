 const fs = require('fs');
 const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
 
 const data = fs.readFileSync(path).toString().trim().split('\n').map( e => e.trim().split(' ').map(Number));
 const [n] = data.shift();
 
 function getMinCost (y,x,arr) {
     if (x == 0) {
         return data[y][x] + Math.min(arr[y-1][1], arr[y-1][2])
     } else if (x == 1){
         return data[y][x] + Math.min(arr[y-1][0], arr[y-1][2])
     } else {
         return data[y][x] + Math.min(arr[y-1][0], arr[y-1][1])
     }
 }
 
 // st : 시작점
 function dp(st) {
     // 각 선택을 저장할 행렬
     const arr = Array.from({length:n}, () => Array(3).fill(0));
     arr[0] = arr[0].map((e,idx) => idx == st ? data[0][idx] : 3000);
     for (let i = 1; i < n; i++) {
         for (let j = 0; j < 3; j++) {
             arr[i][j] = getMinCost(i,j, arr);
         }
     }
     
     const answers = arr[n-1].filter((_,idx)=> idx != st)
     return Math.min(...answers)
 };
 
 let answer = 1000*1000;
 
 for (let k = 0; k < 3; k++) {
     let option = dp(k);
     answer = Math.min(option, answer)
 
 }
 console.log(answer)