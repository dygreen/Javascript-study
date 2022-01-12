// operator = 연산자

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder (나눈 나머지 값)
console.log(2 ** 3); // exponentiation (몇 승)

// 3. Increment(증가) and decrement(감소) oprators
let counter = 2;
const preIncrement = ++counter; // ++를 앞에 붙이면 preincrment라고 함
// counter = counter + 1; (++가 앞에 있으므로, ++ 동작 먼저 실행)
// preIncrement = counter; (++다음 counter 동작 실행)
// (위 코드는 이 코드랑 동일한 의미. 
// 즉, counter에 1을 더해서 counter에 다시 값을 할당한 다음에 preIncrement라는 변수에 이 값을 할당하는 것)
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// preIncrement: 3, counter: 3 결과가 나옴 (counter가 바뀜)

const postIncrement = counter++; //
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y; 와 동일한 코드 (x가 중복되는 것을 막은 코드임)
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greator than or equal

// 6. Logical operator: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// < || (or) > finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}
// 위 세개 중에 하나라도 true가 되면 true로 계산이 되는 연산자
// finds the first truthy value 
// true를 찾으면 멈춤. 즉, 첫번째가 true면 첫번째에서 멈춘다
// 그러므로 check()나 계산이 복잡한 함수와 같은 것은 마지막에 마지 못해서 호출하도록 맨 뒤에 넣는 것이 좋음

// < && (and) > finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// often used to compress log if-statement
// nullableObject && nullableObject.something
// 간편하게 null 체크할 때 많이 쓰임
// object가 null이면 false가 되기 때문에 뒤에가 실행이 안될 것
// 즉, nullobject가 null이 아닐 때만 이 object에 something이라는 value를 받아오게 됨
// if (nullalbeObject != null) {
//     nullableObject.something;
// }

// < ! (not) > 값을 반대로 바꿔줌
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;
// == loose equality, with type conversion (타입을 변경해서 검사함)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality, no type conversion (타입 변경 안 함. 정확한 검사를 위해 되도록 === 사용하기)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' }; // 값은 같지만 다른 ref를 갖고 있음 (ref1)
const ellie2 = { name: 'ellie' }; // ref2
const ellie3 = ellie1; // ref1
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false = 똑같은 type이든 아니든 ref 값이 다르기 때문에
console.log(ellie1 === ellie3); // true = ellie1과 똑같은 ref를 갖고 있음
// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false (0은 boolean 타입이 아님)
console.log('' == false); // true
console.log('' === false); // false (''은 boolean 타입이 아님)
console.log(null == undefined); // true
console.log(null === undefined); // false (null과 undefined는 다른 타입)

// 8. Conditional operator: if
// if, else if, else
const name = 'ellie'; // 'corder' 'df'
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'corder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');
// ? 앞의 정보가 true니? true면 yes를 실행/출력하고 아니면 : 다음인 no를 실행하는 것)

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops (반복문)
// while loop, while the condition is truthy,
// body code(={블럭}) is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// do while loop, body code is executed(실행) first,
// then check the condition.
do {
    console.log(`do while: ${i}`)
    i--;
}   while (i > 0);
// {블럭}을 먼저 실행하고 싶다면 do while, 조건문이 맞을 때만 블록을 실행하고 싶다면 while을 써야함

//for loop, for(begin;(시작하는 문장=1번만 실행) condition; step(어떤 스텝을 밟아 나갈 것인지 명시))
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j =0; j < 10; j++) {
        console.log(`i: ${i}, J:${j}`);
    }
}

// loop에서는 break나 continue같은 키워드를 써서 loop를 끝낼 수 있음
// break(loop를 완전히 끝내는 것), continue(지금 것만 스킵하고 다음 스텝으로 넘어가는 것)
// Q1. iterate from 0 to 10 and print only even numbers
// (숫자 0부터 10까지 짝수만 출력) (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}
// 위는 연습용 사실은 아래처럼 하는게 편함
for (let i = 0; i < 11; i++) {
    if (i % 2 === 0)
      console.log(`q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8
// (0부터 10까지 looping하는 것 작성+ 숫자 8을 만나면 그만하는 것) (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}