// 배열

// 1. 생성
// 1-1. 기본 생성
// let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
// let number = new Array(5);

// console.log(fruits.length);
// console.log(number.length);

// 2. 요소 접근
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// 3. 배열 메소드
// 3-1. push
// let fruits = ["사과", "바나나"];
// console.log(fruits);

// fruits.push("오렌지");
// console.log(fruits);

// 3-2. pop - 맨 뒤에가 사라짐
// let fruits = ["사과", "바나나"];
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// 3-3. shift - 맨 앞이 사라짐
// let fruits = ["사과", "바나나", "키위"];
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// 3-4. unshift - 맨 앞으로 추가 됌
// fruits.unshift("포도");
// console.log(fruits);

// 3-5. splice - splice(시작시점, 몇개지울지, "추가할것");
// let fruits = ["사과", "바나나", "키위"];
// fruits.splice(1, 1, "포도");
// console.log(fruits);

// 3-6. slice - slice(시작지점, ~전까지)
// let fruits = ["사과", "바나나", "키위"];
// let slicedFruits = fruits.slice(0,2);
// console.log(slicedFruits);


// forEach 제외하고 모두 return문이 필요하다.

// (1) forEach
// let numbers = [3, 2, 1, 2, 1];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.forEach(function(item){
//     console.log("item입니다 =>", item);
// });

// (2) map : 항상 원본 배열의 길이만큼이 return이 된다. 
// let newNumbers = numbers.map(function(item){

//     return item * 2;
// });

// console.log(newNumbers);

// (3) filter
// let numbers = [3, 2, 1, 2, 1];

// let filteredNumbers = numbers.filter(function(item){

//     return item > 2;
// });

// console.log(filteredNumbers);

// (4) find
let numbers = [4, 1, 5, 4, 5];

let result = numbers.find(function(item){
    return item > 3;
})

console.log(result);