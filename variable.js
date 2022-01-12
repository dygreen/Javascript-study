'use strict';
console.log('Hello World!');

// variable = 변수

// 2. Variable, rw(read/write)
// let (added in ES6)
// mutable data type
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name='hello';
console.log(name);  // {}(=블록)을 이용하면 안에 있는 데이터를 볼 수 없음 
console.log(globalName); // global은 어디서나 보임
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
console.log(age);
age = 4;
console.log(age);
var age; // let은 먼저 선언해야 값이 할당되고 출력되지만, var는 선언하기 전에 값을 할당해도 출력됨
// var hoisting (move declaration from bottom to top)
// has no block scope(={})
// { age=4; var age; > 4가 출력됨}
// name = 4;
// let name;

// 3. Constant, r(read only)
// 값을 선언함과 동시에 할당한 뒤로는 절대 값을 변경할 수 없음 (immutable)
// use const whenever possible.
// only use let if variable needs to change.
// Note!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17; //integar
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// [primitive type]
// number - special numeric values: infinity, -infinity, NaN(not a number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2*53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string) = ``기호를 이용해 원하는 string을 적고 $사인과{}기호를 이용하면 변수의 값이 자동적으로 붙여져서 나옴
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// ``을 이응하면 중간에 씌여진 space나 문자열들이 그대로 나옴
console.log('value: ' + helloBob + 'type: ' + typeof helloBob); // ''을 쓸 경우

// boolean
// false로 간주되어 지는 것: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null (=아무 가치 없는)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // = let x = undefined;
console.log(`value: ${x}, tyep: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// symbol은 동일한 string을 작성했어도 다른 symbol로 만들어지기 때문에 주어진 string에 상관없이 고유한 식별자를 만들때 사용함
// 동일한 symbol을 만들고 싶을 때 
const gSymbol1 = Symbol.for('id'); // .for 붙이기
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// symbol은 .description 을 이용해서 출력해야 error가 안 남
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// [object]
// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 }; // const인 ellie는 이미 정해졌지만 name&age 같은 ref 값은 정할 수 있음
ellie.age = 21; // 변경 가능

// 5. Dynamic typing: dynamically typed laguage
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // string으로 변환됨
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // 숫자들을 나눌 수 있는 연산자를 썼다고 인식해 숫자를 나눔
console.log(`value: ${text}, type: ${typeof text}`);
// 중간에 타입을 숫자로 바꿔버렸음
console.log(text.charAt(0)); // string으로 이해해서 이렇게 함수를 부르게 되면 error
// javascript는 dynamic typing이라 조심해야함 (typescript 배워야할 이유)
