// 형 변환
// 형 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환

//암시적
// 1-1. 문자열
let result1 = 1 + "2"; // 숫자와 문자열이 더하기로 만나면 문자열로 자동으로 합쳐진다 그래서 12가 나오고 string이 된다.
// console.log(result1);
// console.log(typeof result1);

let result2 = "1" + true;
// console.log(result2);
// console.log(typeof result2);

// {}, null, undefined + "1" => 문자열

// 1-2. 숫자
let result3 = 1 - "2"; // 더하기 연산자가 아닌 빼기나 곱하기 나누기가 나왔을 때는 숫자가 우선시 된다. 문자랑 문자가 만나도 숫자로 변환된다.
// console.log(result3);
// console.log(typeof result3);

let result4 = "2" * "3";
// console.log(result4);
// console.log(typeof result4);

// 2. 명시적 형 변환
// 2-1. Boolean
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log("----------------");
// console.log(Boolean("false"));
// console.log(Boolean({}));

// 2-2. 문자열 
// let result5 = String(123);
// console.log(typeof result5);
// console.log(result5);

// let result6 = String(true);
// console.log(typeof result6);
// console.log(result6);

// let result7 = String(false);
// console.log(typeof result7);
// console.log(result7);

// let result8 = String(null);
// console.log(typeof result8);
// console.log(result8);

// let result9 = String(undefined);
// console.log(typeof result9);
// console.log(result9);

// 2-3. Number
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);