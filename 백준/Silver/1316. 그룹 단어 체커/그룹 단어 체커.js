const { count } = require("console");
const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력을 처리한다.
const input = fs.readFileSync(path).toString().trim().split("\n");

const n = parseInt(input.shift());

let answer = 0;

for (let i = 0; i < n; i++) {
  answer += countGroupwords(input[i]);
}

function countGroupwords(word) {
  const length = word.length;

  const used = {};
  for (let i = 97; i <= 122; i++) {
    const key = String.fromCharCode(i); // 아스키 코드로 문자 생성
    used[key] = 0;
  }

  used[word[0]] = 1;
  for (let j = 0; j < length - 1; j++) {
    if (word[j] == word[j + 1]) continue;
    if (used[word[j + 1]]) return 0;
    used[word[j + 1]] = 1;
  }
  return 1;
}

console.log(answer);
