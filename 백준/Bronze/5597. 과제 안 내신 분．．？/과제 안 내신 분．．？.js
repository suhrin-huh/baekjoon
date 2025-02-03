const fs = require('fs');
const path = process.platform == "linux" ? '/dev/stdin' : './input.txt';

const numbers = fs.readFileSync(path).toString().trim().split('\n').map(Number);

const checked = Array.from({length: 30}, () => 0);

for (const num of numbers) {
    checked[num-1] = 1;
}

for (let i = 0; i < 30; i++){
    if (!checked[i]) {
        console.log(i+1);
    }
}