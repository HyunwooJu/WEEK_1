// 2. 문자 : string (문자열 = 문자의 나열)
// ' ' = " " 
let str = "Hello";
// console.log(str);
// console.log(typeof str);

// 2-1. 문자열 길이 확인하기
// console.log(str.length);

// 2-2. 문자열 결합하기(concatenation)
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
// console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
// console.log(str3.substr(7, 5)); // substr(시작위치, 시작위치로 부터 플러스해서 몇개 추려올거냐.)
// console.log(str3.slice(7, 12)); // slice(시작위치, 시작위치부터 쓴 숫자까지 그 사이의 값을 가져온다.)

// 2-4. 문자열 검색
let str4 = "Hello, World1";
// console.log(str4.search("World"));

// 2-5. 문자열 대치
let str5 = "Hello, World!";
let result01 = str5.replace("World", "Javascript"); // replace("바꾸고자하는것", "변경하고자하는것")
// console.log(result01);

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(","); //split("기준")
console.log(result02);