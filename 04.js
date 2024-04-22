// 불리언(Boolean)
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;

// console.log(bool1);
// console.log(typeof bool1);
// console.log(bool2);
// console.log(typeof bool2);

// undefined
// un : not, define : 정의하다
let x; // 값이 할당이 안됌. 정의만 된거여서 출력하면 undefined 나옴
// console.log(x);

// null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null ≠ undefined
let y = null;
// console.log(y);

// object(객체) : key-value pair
let person = {
    name: 'Ju',
    age: 26,
    isMarried: true
};

console.log(typeof person);

// array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입!!! 
let number = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];