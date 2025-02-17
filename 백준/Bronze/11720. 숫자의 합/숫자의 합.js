const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('\n');

const nums = input[1].split('').map(Number);

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(...nums))