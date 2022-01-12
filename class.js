'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// javascript classes
// - introduced in ES6
// - syntatical sugar over prototype-based inheritance

// 1. Class declarations
// class person {
//    name;
//    age;  >> name과 age 같은 속성(field)가 들어있고
//    speak(); >> 행동(method)도 들어있음
// }
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
// object 생성
const ellie = new Person('ellie', 20); // 새로운 object를 만들 때는 new라는 키워드를 씀
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

const doyeon = new Person('doyeon', 26);
console.log(doyeon.age);
console.log(doyeon.name);
doyeon.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {     // get이라는 키워드를 통해 값을 return 하고
        return this._age;   // get age를 호출하면 this.age를 return해야 함
    }

    set age(value) {     // set이라는 키워드로 값을 설정할 수 있음(값을 설정하기 때문에 value를 받아와야 함)
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;    // 새로운 value를 받으면 this.age를 value로 설정하게 됨
    }               // value가 값이 마이너스라면 0을 쓰고, 아니라면 지정된 value를 쓰겠다
}
 // * getter와 setter 안에 쓰이는 변수 이름을 조금 다르게 만들어야 함
const user1 = new User('steve', 'job', -1);
console.log(user1.age);

// 3. Fields (pubilc, private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance (상속과 다양성)
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // extends라는 키워드를 이용해서 shape을 바로 연장
class Triangle extends Shape {
    draw() {
        super.draw();   // 공통적으로 정의한 것도 불러주고 싶다면 부모(super) 함수를 호출하면 됨
        console.log('🔺');
    }
    getArea() {
        return (this.width * this. height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // t >> 자바스크립트에서 만든 모든 object class들은 자바스크립트에 있는 object를 상속한 것임
// instanceof은 왼쪽에 있는 object가 오른쪽에 있는 class
// object가 class를 이용해서 만들어진 아이인지 아닌지 확인하는 것(true, false)
console.log(triangle.toString());