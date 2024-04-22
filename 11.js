// 문(if, else if, switch ~~~)

// 조건문 - if, else if, else, switch
// 1. if문
// let x = 10;

// if (x < 0) {
//     //main logic
//     console.log("x는 양수입니다.");
// } 

// 1-2
// let y = "hello world";

// // y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력
// if (y.length >= 5) {
//     console.log(y.length);
// }

// let x = -3;
// // 2. if - els문
// if (x > 0) {
//     console.log("x는 양수입니다.");
// } else {
//     console.log("x는 음수입니다.");
// }



// let x = 17;

// // if - else if - else 문
// if (x < 14) {
//     console.log("초딩이구만?")
// } else if (14 >= 0 && x <= 16) {
//     console.log("중딩이구만?")
// } else {
//     console.log("고딩이구만?")
// }

// 1-4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "메롱";

switch (fruit) {
    case "사과":
        console.log("사과 입니다.");
        break;
    case "바나나":
        console.log("바나나 입니다.");
        break;
    case "키위":
        console.log("키위 입니다.");
        break;
    default:
        console.log("과일이 아니잖아?!");
        break;
} 