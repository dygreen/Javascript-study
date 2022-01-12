
// Objects
// one of the JavaScript's data types.
// a colloection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object
// object = { key : value }; (object는 key와 value의 집합체이다)

// 1. Literals and properties
// object를 만드는 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
// 자바스크립트는 뒤늦게 하나의 property를 추가 가능
ellie.hasJob = true;
console.log(ellie.hasJob);
// can delete properties later
// 삭제도 가능
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties (계산된 properties)
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);
console.log(ellie['hasJob']);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// const person4 = makePerson('ellie', 5);
// console.log(person4);

// function makePerson(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// 4. Constructor function
const person4 = new Person('ellie', 5);
console.log(person4);
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5]
// for(let i = 0; i < array.length ; i++) {
//     console.log(array[i]);
// }
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
// object를 복제할 수 있는 방법
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {  // 첫번째 key는 name, 두번째 key는 age
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {}; // 텅 비어져 있는 것을 정의하고
Object.assign(user4, user); // user4, user(전달하고자하는 object)
// => const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 나오는 아이일 수록 앞에 동일한 property가 있다면 값을 계속 덮어씌워지기 때문(fruit2가 fruit1에 나와있던 property를 계속 덮어씌움)
console.log(mixed.color);
console.log(mixed.size);
