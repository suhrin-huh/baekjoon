 const fs = require('fs');
 const path = process.platform == 'linux' ? "/dev/stdin" : './input.txt';
 
 const data = fs.readFileSync(path).toString().trim().split('\n').map((e) => e.split(" ").map(Number));

 // 통로의 길이와 쓰레기의 개수를 입력받는다.
 const [n,m,k] = data.shift();
 
 let answer = 0;
 
 // 쓰레기의 개수에 맞추어서 지도에 표시한다.
 const trashMap = Array.from({length:n}, () => Array(m).fill(0));
 
 for ( const [i,j] of data) {
     trashMap[i-1][j-1] = 1;
 };
 
 // 0,0 부터 (n-1. m-1)까지 하나씩 살펴본다.
 for (let y = 0; y < n; y++) {
     for (let x = 0; x<m; x++) {
         // 쓰레기가 없으면 pass
         if (!trashMap[y][x]) continue;
         const amount = checkTrashAmount(y,x);
         if (answer < amount) {
             answer = amount;
         }
     }
 }

 function checkTrashAmount(y,x) {
     let amount = 1; // 발견한 순간 1개부터 시작
     trashMap[y][x] = 0;
     const pos = [y,x];
     const q = [pos];
     while (q.length) {
         const [i,j] = q.shift();
         const delta = [[0,1], [0,-1],[1,0],[-1,0]]
         for (const [di,dj] of delta) {
             const ni = i + di;
             const nj = j + dj;
             if (ni < 0 || ni >= n || nj < 0 || nj >= m) continue; // 지도의 크기에서 벗어나는것 제외
             if (!trashMap[ni][nj]) continue; // 쓰레기가 없는 구역 제외
             trashMap[ni][nj] = 0; // q에 넣기 전에 변경해두어야 뒤에서 불필요한 계산을 덜 한다.
             amount++;
             q.push([ni,nj]);
         }
     }
     return amount;
 }
 
 
 console.log(answer);