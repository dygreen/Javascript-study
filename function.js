// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a tast or calculates a value

// 1. Function(함수) declaration
// function name(param1, param2) {body... return; }
// one function === one thing
// naming: doSomething, command, verb
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) { //param로 message를 전달하면 전달된 메시지를 화면에 출력하도록 만듦
    console.log(message);
}
log('hello!');
log(1234);

// 2. Parameters
// premitive(원시의) parameters: passed by value (메모리에 value가 저장되어 있기 떄문에 value가 그대로 전달됨)
// object parameters: passed by reference (object의 경우 메모리에 reference가 저장됨 > ref이 전달됨)
function changeName(obj) { // changeName이라는 function은
    obj.name = 'coder'; // 전달된 object의 이름을 coder로 무조건 변경하는 함수
}
const ellie = { name: 'ellie' }; // ellie라는 const를 정의한 다음 ellie라는 object를 만들어서 할당해주면
changeName(ellie); // 메모리에는 object가 만들어진 ref가 들어가게 됨. 이 ref는 이 object를 메모리 어딘가에 가리키고 있음)
console.log(ellie); // changeName(ellie)를 전달하게 되면 이 전달된 ellie.ellie가 가리키고 있는 곳의 이름을 coder로 변경하게됨
 // 따라서 이것을 출력하게 되면 ellie의 이름이 coder로 변경됨

 // 3. Default parameters (added in ES6)
 function showMessage(message, from = 'unknown') { // par 옆에 원하는 default 값을 지정해놓으면 사용자가 값을 지정하지 않을때 이 값이 대체되어 사용됨)
     console.log(`${message} by ${from}`);
 }
 showMessage('Hi!');

 // 4. Rest parameters (added in ES6)
 function printAll(...args) {
     for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
     }

     for (const arg of args) {
        console.log(arg);
     }

     args.forEach((arg) => console.log(arg)); // 위 세가지가 동일한 함수임
 }
 printAll('dream', 'coding', 'ellie');

 // 5. Local Scope ("밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다")
 let globalMessage = 'global'; // global variable
 function printMessage() {
     let message = 'hello';
     console.log(message); // local variable ({블록} 안에서 선언하게 되면 지역 변수임) / 지역 변수는 안에서만 접근이 가능함
     console.log(globalMessage);
     function printAnother() {
         console.log(message);
         let childMessage = 'hello';
     }
     // console.log(childMessage) > error (자식을 부모 사이에서 보려고 하면 에러)
    }
 printMessage();
// console.log(message) > error (지역 변수이기 때문에 밖에서 접근 불가)

// 6. Return a value (모든 함수에는 return undefine이거나 값을 return할 수 있음)
function sum(a, b) {
    return a + b;
}
const result = sum(1,2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad example
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good example
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class Function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other fuctions.
// can be retuned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous(이름 없는) function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    } 
}
// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('love you', printYes, printNo);
randomQuiz('wrong', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
}
// arrow function은 이를 한 줄로 간단하게 표현 가능
// const simplePrint = () => console.log('simplePrint!');
// 다른 예시
const add = function (a, b) {
    return a + b;
};
// const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression 
// 함수를 선언하자마자 바로 호출하고 싶다면 function을 ()로 묶고 호출하는 것처럼 (); 를 붙이기
(function hello() {
    console.log('IIFE');
})();

// quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(command, a, b) {
    switch (command) {
        case 'add':
          return a + b;
        case 'substract':
          return a - b;
        case 'divide':
          return a / b;
        case 'multiply':
          return a * b;
        case 'remainder':
          return a % b;
        default:
          throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));
console.log(calculate('what', 3, 4));
