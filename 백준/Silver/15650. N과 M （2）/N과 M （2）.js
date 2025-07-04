const fs = require('fs');
const path = process.platform == 'linux' ? '/dev/stdin' : './input.txt'
const data = fs.readFileSync(path).toString().trim().split(" ").map(Number);

const [n,m] = data;
const answers = [];

function dfs (level, now, arr) {
    if (level == m) {
        answers.push(arr);
        return;
    }
    for (let next = now + 1; next <= n; next++) {
        dfs(level+1, next, [...arr, next]);
    }
}

dfs(0,0,[]);

for (const lst of answers) {
    console.log(lst.join(' '));
};