'use strict';

// Array (자료구조)

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 배열의 마지막 데이터에 접근할 때 (배열은 index가 0부터 시작하기 때문에 '총길이-1'=제일 마지막 indes)

console.clear();
// 3. Looping over an array
// print all fruits 방법a,b
// a. for 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) { // fruit이라는 변수에 fruits에 있는 데이터를 한번씩 순차적으로 할당하면서 {블록}을 실행함
    console.log(fruit);
}

// parameter(매개변수)=argument(인자)를 받아서 함수 안으로 매개해주는 변수들

// c. forEach 
// fruits.forEach(function(fruit, index, array) {
//     console.log(fruit, index, array);
// });
fruits.forEach((fruit) =>  console.log(fruit));
// forEach는 배열 안에 들어있는 value들마다 내가 전달한 함수를 출력하는구나

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍑', '🍒');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍐', '🍊');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index(중간) position
fruits.push('🍐', '🍊');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍑', '🍒');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍇', '🥑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍒'));

// includes
console.log(fruits.includes('🍑'));
console.log(fruits.includes('🍐'));
console.log(fruits.indexOf('🍐')); // index에 없으므로 -1이 출력됨

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 제일 첫번째로 해당하는 값을 만나면, 그 값을 출력함
console.log(fruits.lastIndexOf('🍎'));