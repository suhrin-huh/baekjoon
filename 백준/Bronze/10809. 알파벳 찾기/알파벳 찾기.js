const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';

const word = fs.readFileSync(path).toString().trim().split('');

const alphabetArray = [...Array(26)].map((_, i) => String.fromCharCode(97+i));

const answer = [];
for (const alphabet of alphabetArray) {
    const idx = word.indexOf(alphabet);
    answer.push(idx);
}

console.log(answer.join(" "))
