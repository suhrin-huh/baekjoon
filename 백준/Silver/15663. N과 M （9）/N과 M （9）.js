 const fs = require('fs');
 const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
 
 const data = fs.readFileSync(path).toString().trim().split('\n').map(e => e.split(' ').map(Number));
 
 const [n,m] = data.shift();
 
 const numbers = data.shift();
 numbers.sort((a,b) => a-b); // 오름차순 정렬
 
 const answers = [];
 
 const used = Array(n).fill(0);
 
 function dfs(level, arr ) {
     if (level == m) {
         const added = arr.join(" ");
         if (!answers.some(e => e == added)) {
             answers.push(arr.join(" "))
         }
         return;
     }
 
     for (let i = 0; i < n; i++) {
         if (used[i]) continue;
         used[i] = 1
         const next = numbers[i]; // (level + 1)번째에 들어갈 숫자
         arr.push(next)
         dfs(level+1,arr );
         arr.pop();
         used[i] = 0
     }
 }
 
 dfs(0,[])
 console.log(answers.join('\n'));