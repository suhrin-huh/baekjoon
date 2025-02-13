const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split("\n").map(el => el.split(" ").map(Number));

const num = Number(input[0][0]);
const data = input[1];

const max = Math.max(...data);

let answer = 0;

for (const n of data) {
    answer += n;
}

console.log(answer/max*100/num)