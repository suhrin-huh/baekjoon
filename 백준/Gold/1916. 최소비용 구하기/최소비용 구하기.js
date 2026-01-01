const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const data = fs.readFileSync(path).toString().trim().split(/\s+/).map(Number);

let idx = 0;
const n = data[idx++];
const m = data[idx++];

const adj = Array.from({ length: n + 1 }, () => []);
for (let i = 0; i < m; i++) {
  const u = data[idx++];
  const v = data[idx++];
  const w = data[idx++];
  adj[u].push([v, w]);
}

const start = data[idx++];
const end = data[idx++];

const dist = Array(n + 1).fill(Infinity);
const visited = Array(n + 1).fill(false);

dist[start] = 0;

for (let i = 0; i < n; i++) {
  let now = -1;
  let minDist = Infinity;

  for (let j = 1; j <= n; j++) {
    if (!visited[j] && dist[j] < minDist) {
      minDist = dist[j];
      now = j;
    }
  }

  if (now === -1 || now === end) break;
  visited[now] = true;

  for (const [next, weight] of adj[now]) {
    if (dist[now] + weight < dist[next]) {
      dist[next] = dist[now] + weight;
    }
  }
}

console.log(dist[end]);