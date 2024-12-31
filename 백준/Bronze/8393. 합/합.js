const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin':'./input.txt';

const input = fs.readFileSync(path).toString().trim();
const num = Number(input);
const answer = (1+num)*num/2;
console.log(answer);