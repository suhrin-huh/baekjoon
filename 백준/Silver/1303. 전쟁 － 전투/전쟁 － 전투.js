 const fs = require('fs');
 const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
 
 const data = fs.readFileSync(path).toString().trim().split('\n');
 
 const [n,m] = data.shift().split(' ').map(Number);
 
 const warMap = data.map((e) => e.trim().split("")); // 혹시 모르므로 공백 제거해주는 게 좋다!
 
 // 적팀과 내 팀의 전력을 반환할 변수
 const totalCount = {W:0, B:0};
 
 for (let y = 0; y < m; y++) {
     for (let x = 0; x < n; x++) {
         if (!warMap[y][x]) continue;
         const team = warMap[y][x]
         const count = getTroopCount(team, y,x);
         totalCount[team] += count**2
     }
 }
 function getTroopCount (team, y,x) {
     let count = 1;
     const q = [];
     warMap[y][x] = "";
     q.push([y,x]);
 
     while (q.length) {
         const [i,j] = q.pop();
         const delta = [[0,1], [0,-1], [-1,0], [1,0]];
         for (const [di,dj] of delta) {
             const ni = i + di;
             const nj = j + dj;
             // 지도 범위를 벗어나면 제외
             if (ni < 0 || ni >= m || nj < 0 || nj >= n) continue;
             // 같은 팀이 아닌 경우 제외
 
             if (warMap[ni][nj] !== team) continue;
             warMap[ni][nj] = "";
             count++
             q.push([ni,nj]);
         }
     }
     return count;
 }
 
 console.log(`${totalCount["W"]} ${totalCount["B"]}`);