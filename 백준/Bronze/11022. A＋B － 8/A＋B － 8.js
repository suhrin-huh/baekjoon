const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [TC, ...data] = input;
const tc = Number(TC.at(0));

for (let i = 1; i <= tc; i++) {
    const [a, b] = data[i - 1];
    console.log(`Case #${i}: ${a} + ${b} = ${a+b}`)
};