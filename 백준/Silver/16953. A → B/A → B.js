const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = fs.readFileSync(path).toString().trim().split(" ").map(Number);

function bfs(level, start, end) {
  const q = [];
  q.push([level, start]);

  while (q.length) {
    const [round, now] = q.shift();

    let next = null;

    // - 2를 곱한다.
    next = now * 2;
    if (next == end) {
      return round + 1;
    } else if (next < end) {
      q.push([round + 1, next]);
    }
    // - 1을 수의 가장 오른쪽에 추가한다.
    next = now * 10 + 1;
    if (next == end) {
      return round + 1;
    } else if (next < end) {
      q.push([round + 1, next]);
    }
  }
  return null;
}

const answer = bfs(1, a, b);
console.log(answer || -1);