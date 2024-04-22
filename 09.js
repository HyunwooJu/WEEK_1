// 스코프, 전역변수, 지역변수, 화살표함수
function printX() {
    let x = 10; // 지역 변수임. 함수안에 변수를 넣었으니.
    console.log(x);
}

console.log(x);
printX();