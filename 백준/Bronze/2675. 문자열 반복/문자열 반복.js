const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';

const [n, ...data] = fs.readFileSync(path).toString().trim().split('\n');

for (let line of data) {
    let [num, word] = line.split(' ');
    num = parseInt(num);
    let updatedWord = '';

    for (const alphabet of word) {
        updatedWord += alphabet.repeat(num); // 문자열 반복
    }

    console.log(updatedWord);
}
