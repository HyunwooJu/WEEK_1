// 스코프, 전역변수, 지역변수, 화살표함수
let x = 10; // 전역 변수임. 함수 밖 전체에서 변수를 지정했으니.

function printX() {
    console.log(x);
}

console.log(x);
printX();