const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const coordinate = [];

rl.on("line", (line) => {
    // 입력 값을 배열에 저장
    coordinate.push(Number(line));

    // 입력이 두 개 받았을 때 종료
    if (coordinate.length === 2) {
        rl.close();
    }
}).on("close", () => {
    const [x, y] = coordinate;

    // 사분면 판별 로직
    if (x > 0 && y > 0) {
        console.log(1);
    } else if (x > 0 && y < 0) {
        console.log(4);
    } else if (x < 0 && y > 0) {
        console.log(2);
    } else {
        console.log(3);
    }

    process.exit();
});
