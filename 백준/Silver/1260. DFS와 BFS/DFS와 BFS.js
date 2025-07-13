const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

// 입력 처리
const input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

const [n, m, v] = input.shift().split(" ").map(Number);
const edges = input.map((line) => line.split(" ").map(Number));

// 그래프 생성
const graph = Array.from({ length: n + 1 }, () => []);
for (const [i, j] of edges) {
  graph[i].push(j);
  graph[j].push(i); // 무방향 그래프
}

// 노드 연결 정렬 (오름차순)
graph.forEach((adj) => adj.sort((a, b) => a - b));

// DFS 함수
const dfs = (start) => {
  const visited = new Array(n + 1).fill(false);
  const result = [];

  const traverse = (node) => {
    visited[node] = true;
    result.push(node);

    for (const next of graph[node]) {
      if (!visited[next]) traverse(next);
    }
  };

  traverse(start);
  return result;
};

// BFS 함수
const bfs = (start) => {
  const visited = new Array(n + 1).fill(false);
  const result = [];
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const current = queue.shift();
    result.push(current);

    for (const next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }

  return result;
};

// 결과 출력
console.log(...dfs(v));
console.log(...bfs(v));
