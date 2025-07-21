const fs = require('fs');

const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(path).toString().trim().split('\n').map(Number);

const T = input[0];
for (let i = 1; i <= T; i++) {
  let n = input[i];
  let count = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }

  console.log(count);
}
