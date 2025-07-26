const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split("\n");
const N = Number(input[0]);
const numbers = input.slice(1).map(Number).sort((a, b) => a - b);
const answer = [];

// 산술평균
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
answer.push(`${Math.round(sum / N)}`);

// 중앙값
answer.push(`${numbers[Math.floor(N / 2)]}`);

// 최빈값
const map = new Map();
let maxFreq = 0;

for (let num of numbers) {
    const count = map.get(num) ?? 0;
    map.set(num, count + 1);
    if (count + 1 > maxFreq) {
        maxFreq = count + 1;
    }
}

const modes = [];
for (let [key, val] of map.entries()) {
    if (val === maxFreq) {
        modes.push(key);
    }
}
modes.sort((a, b) => a - b);
answer.push(`${modes.length === 1 ? modes[0] : modes[1]}`);
answer.push(`${numbers[numbers.length - 1] - numbers[0]}`);

console.log(answer.join('\n'));