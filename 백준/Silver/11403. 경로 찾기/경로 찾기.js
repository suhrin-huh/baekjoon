const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const data = fs.readFileSync(path).toString().trim().split("\n");

const n = Number(data.shift());
const graph = data.map((e) => e.trim().split(" ").map(Number));

// 플로이드-워셜 알고리즘 적용
for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][k] && graph[k][j]) {
        graph[i][j] = 1;
      }
    }
  }
}

for (const row of graph) {
  console.log(row.join(" "));
}