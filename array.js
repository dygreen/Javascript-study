'use strict';

// Array (์๋ฃ๊ตฌ์กฐ)

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['๐', '๐'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // ๋ฐฐ์ด์ ๋ง์ง๋ง ๋ฐ์ดํฐ์ ์ ๊ทผํ  ๋ (๋ฐฐ์ด์ index๊ฐ 0๋ถํฐ ์์ํ๊ธฐ ๋๋ฌธ์ '์ด๊ธธ์ด-1'=์ ์ผ ๋ง์ง๋ง indes)

console.clear();
// 3. Looping over an array
// print all fruits ๋ฐฉ๋ฒa,b
// a. for 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) { // fruit์ด๋ผ๋ ๋ณ์์ fruits์ ์๋ ๋ฐ์ดํฐ๋ฅผ ํ๋ฒ์ฉ ์์ฐจ์ ์ผ๋ก ํ ๋นํ๋ฉด์ {๋ธ๋ก}์ ์คํํจ
    console.log(fruit);
}

// parameter(๋งค๊ฐ๋ณ์)=argument(์ธ์)๋ฅผ ๋ฐ์์ ํจ์ ์์ผ๋ก ๋งค๊ฐํด์ฃผ๋ ๋ณ์๋ค

// c. forEach 
// fruits.forEach(function(fruit, index, array) {
//     console.log(fruit, index, array);
// });
fruits.forEach((fruit) =>  console.log(fruit));
// forEach๋ ๋ฐฐ์ด ์์ ๋ค์ด์๋ value๋ค๋ง๋ค ๋ด๊ฐ ์ ๋ฌํ ํจ์๋ฅผ ์ถ๋ ฅํ๋๊ตฌ๋

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('๐', '๐');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('๐', '๐');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index(์ค๊ฐ) position
fruits.push('๐', '๐');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '๐', '๐');
console.log(fruits);

// combine two arrays
const fruits2 = ['๐', '๐ฅ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐'));

// includes
console.log(fruits.includes('๐'));
console.log(fruits.includes('๐'));
console.log(fruits.indexOf('๐')); // index์ ์์ผ๋ฏ๋ก -1์ด ์ถ๋ ฅ๋จ

// lastIndexOf
console.clear();
fruits.push('๐');
console.log(fruits);
console.log(fruits.indexOf('๐')); // ์ ์ผ ์ฒซ๋ฒ์งธ๋ก ํด๋นํ๋ ๊ฐ์ ๋ง๋๋ฉด, ๊ทธ ๊ฐ์ ์ถ๋ ฅํจ
console.log(fruits.lastIndexOf('๐'));