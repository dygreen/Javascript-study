'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when neww Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));        
    },2000);
});

// 2. Consumers: then, catch, finally
promise //
    .then(value => {
    console.log(value);
    })
    .catch(error => {
    console.log(error);
    })
    .finally(() => {  // 성공하든 실패하든 상관없이 어떤 기능을 마지막으로 수행하고 싶을 때 사용
    console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {      // then은 값을 바로 전달해도 되고, 또 다른 비동기인 Promise를 전달해도 됨
        return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
        // resolve(`${hen} => 🥚`), 1000);
    });
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// getHen()
//  .then(hen => getEgg(hen))
//  .then(egg => cook(egg))
//  .then(meal => console.log(meal));
getHen()
 .then(getEgg)
 .catch(error => {
     return '🥐';
 })
 .then(cook)
 .then(console.log)
 .catch(console.log);