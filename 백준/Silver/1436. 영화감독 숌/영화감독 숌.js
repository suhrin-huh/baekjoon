const fs = require("fs");
const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";

let index = Number(fs.readFileSync(path).toString().trim());

let number = 665;

while (index) {
  number++;
  const isContain = String(number).indexOf("666");
  if (isContain != -1) index--;
}

console.log(number);