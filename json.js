// JSON
// javascript object Notation
// simplest data interchange Format
// lightweight text-based structure
// easy to read
// key-value pairs
// used for serialization and transmission of data between the network the network connection
// independent programming language and platform

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'orange']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);
// jump라는 함수는 json에 포함되지 않음 -> 함수는 object에 있는 데이터가 아니기 때문에 제외됨
// + javascript에 있는 특별한 데이터도 json에 포함되지 않음

json = JSON.stringify(rabbit, ['name']);
console.log(json);
// rabbit object에서 name만 json으로 변경하고 싶다면

// callback 함수를 통해 좀 더 세밀하게 통제 가능
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.log('---------');
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
// console.log(obj);
// rabbit.jump();
// obj.jump(); // rabbit을 json으로 변환할 때 jump 함수는 포함되어 있지 않았기 떄문에 obj에도 없음

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // bithDate는 string 데이터이기 떄문

// 세밀하게 데이터로 변환하고 싶을 때 callback 함수 사용
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj.birthDate.getDate());