const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const data = fs.readFileSync(path).toString().trim().split('\n');


const [r,c] = data.shift().trim().split(' ').map(Number);
const field = data.map(e => e.trim().split(''));
// 이동했는지 체크할 배열
const checked = Array.from({length:r}, () => Array(c).fill(0));
// 물의 위치를 담을 배열
const water = [];
// 고슴도치의 동선을 담을 배열
const arr = [];
let answer = null;
let round = 0;

// 물의 위치와 시작점을 파악한다. 
for (let i = 0; i < r; i ++) {
    for (let j = 0; j < c; j++){
        const current = field[i][j];
        // 고슴도치의 시작점을 파악
        if (current == 'S') {
            arr.push([i,j,0])
        // 물의 위치 파악
        } else if (current == '*'){
            water.push([i,j,0])
        }
    };
}

function spreadWater () {
     // water이 빈 배열이 될 때까지 반복
    while (water.length) {
        // 물의 위치를 담고 있는 배열에서 하나를 꺼낸다.
        const [i,j,level] = water.shift();
        // 만약에 level이 round보다 크면 다시 배열 앞에 넣고 중단
        if (level > round) {
            water.push([i, j, level]);
            break;
        }
        // 아니라면 해당 요소에 인접한 비어있는 곳을 물로 바꾸고, level + 1과 배열의 위치를 담는다.
        const delta = [[0,1], [0,-1], [1,0], [-1,0]];
        for (const [di,dj] of delta) {
            const ni = i + di;
            const nj = j + dj;
            if (ni < 0 || ni >= r || nj < 0 || nj >= c) continue;
            if (field[ni][nj] == ".") {
                field[ni][nj] = "*";
                water.push([ni, nj, level+1])
            }
        }
    }
 }

 

 function move() {
    while (arr.length) {
        // 고슴도치의 위치들을 담고 있는 배열에서 하나를 꺼낸다.
        const [i,j,level] = arr.shift();
        // 만약에 level이 round보다 크면 다시 배열 앞에 넣고 중단
        if (level > round) {
            arr.push([i,j,level]);
            break;
        }

        // 해당 위치에 인접한 곳 탐색
        const delta = [[0,1], [0,-1], [1,0], [-1,0]];
        for (const [di,dj] of delta) {
            const ni = i + di;
            const nj = j + dj;
            if (ni < 0 || ni >= r || nj < 0 || nj >= c) continue;
            const next = field[ni][nj];
            // 이미 방문한적 있으면 pass
            if (checked[ni][nj]) continue;
            // 비어있는 곳이면 방문 체크 후 arr에 추가
            if (next == '.') {
                arr.push([ni,nj, level + 1]);
                checked[ni][nj] = 1;
            }
            // 동굴 도착이라면 answer를 level+1로 재할당하고 중단.
            if (next == "D") {
                answer = level + 1
                break;
            }
        }
        if (answer) break;
    }
 }

 

 while (arr.length) {
    spreadWater();
    // 물 퍼뜨리기가 끝나면 고슴도치는 이동을 시작한다.
    move();
    // 동굴에 도착하는 순간 탐색을 중지한다.
    if (answer) break;
    round += 1;
 }    

console.log(answer || 'KAKTUS')