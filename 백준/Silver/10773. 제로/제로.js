const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(path).toString().trim().split("\n").map(Number);
const data = input.slice(1);

let lst = [];
let answer = 0;

// 전달받는 숫자들에 대하여 탐색 시작
for (const num of data) {
  // 숫자가 0이라면 가장 최근의 숫자를 lst에서 제거하고, 그 수만큼 answer를 감소시킨다.
  if (!num) {
    const alpha = lst.pop();
    answer -= alpha;
  } else {
    // 0이 아니라면 lst에 추가하고, 합을 구한다.
    lst.push(num);
    answer += num;
  }
}

console.log(answer);
