const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';

const word = fs.readFileSync(path).toString().trim();
console.log(word.charCodeAt(0))