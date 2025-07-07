 const fs = require('fs');
 const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
 
 const data = fs.readFileSync(path).toString().trim().split('\n').map((e) => e.trim().split(' ').map(Number))
 const [n,m] = data.shift();
 const numbers = data.shift();
 numbers.sort((a,b) => a-b);
 const answers = [];
 
 
 function dfs(level, nowIdx, arr){
     if (level == m) {
         answers.push(arr.join(' '));
         return;
     }
     // i = index
     // 0부터 들어가야하기 때문에 i = nowIdx
     // 만약에 i = nowIdx + 1로 하려면 dfs 함수를 처음 실행할 때에 초기값을 0,-1,[]로 설정해야한다.
     for (let i = nowIdx; i < n; i++) {
         arr.push(numbers[i]);
         dfs(level+1, i+1, arr); // 같은 수를 여러 번 골라도 되기 때문에 i를 그대로 넘겨준다.
         arr.pop();
     }
 }
 
 dfs(0,0,[]);
 console.log(answers.join('\n'));