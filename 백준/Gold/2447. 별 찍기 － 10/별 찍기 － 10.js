const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let str = "";

function star (i, j) {
  // i,j를 3으로 나눈 나머지가 1이라면 사각형의 가운데 있게되므로 공백 처리
  if(i % 3 === 1 && j % 3 === 1){
    str += " ";
  } else {
    // 위 조건과 관계없이 가운데 존재하는 (N/3)x(N/3) 정사각형은 공백이므로 예외 처리
    if(Math.floor(i / 3) === 0 && Math.floor(j / 3) === 0){
      str += "*";
    } else {
      // 예를 들어, 9x9 정사각형이라면
      // (3,3) ~ (3,5), (4,3) ~ (4,5), (5,3) ~ (5,5)
      // 해당 좌표들은 공백
      star(Math.floor(i / 3), Math.floor(j / 3));
    }
  }
}

// 왼쪽 위, 즉, 문자열이 처음 찍히는 곳을 (0,0) 좌표라고 생각
// i는 한 줄을 의미
for(let i = 0; i < input; i++){
  // j는 한 줄에 들어있는 한 칸을 의미
  for(let j = 0; j < input; j++){
    star(i, j);
  }
  
  // i가 바뀌기 전에 줄바꿈 처리를 해줌
  str += "\n";
}

console.log(str);