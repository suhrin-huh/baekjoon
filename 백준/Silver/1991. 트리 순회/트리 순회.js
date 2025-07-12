const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

const data = fs.readFileSync(path).toString().trim().split("\n");

const n = Number(data.shift());
const tree = {};

for (let i = 0; i < n; i++) {
  const [parent, left, right] = data.shift().trim().split(" ");
  tree[parent] = [left, right];
}

let answer = "";

// 전위 순회
function preorder(node) {
  answer += node;
  if (tree[node][0] != ".") preorder(tree[node][0]);
  if (tree[node][1] != ".") preorder(tree[node][1]);
}

// 중위 순회
function inorder(node) {
  if (tree[node][0] != ".") inorder(tree[node][0]);
  answer += node;
  if (tree[node][1] != ".") inorder(tree[node][1]);
}

// 후위 순회
function postorder(node) {
  if (tree[node][0] != ".") postorder(tree[node][0]);
  if (tree[node][1] != ".") postorder(tree[node][1]);
  answer += node;
}

preorder("A");
console.log(answer);
answer = "";
inorder("A");
console.log(answer);
answer = "";
postorder("A");
console.log(answer);