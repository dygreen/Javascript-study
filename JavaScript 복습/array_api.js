'use strict';
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍏, 🍎, 🍐, 🍊';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5]
    const result = array.reverse();
    console.log(result);
    console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2);
    console.log(result);
    console.log(array);
    // point! array 자체를 변형하는 것이 아니라, 새로운 array를 만드는 것이므로 splice 사용 불가

    const array2 = [1, 2, 3, 4, 5];
    const result2 = array2.slice(2, 5);
    console.log(result2);
    console.log(array2);
    // 배열에서 원하는 부분만 return해서 받아오고 싶을 때 사용!
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
    // 배열 중에 하나라도 만족하는 것이 있는지 없는지 검사할 때 'some'
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
    // 모든 배열의 조건이 만족해야 할 때 'every'
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
    // reduce: 배열에 있는 모든 값을 누적하는, 함께 모아놓을 때 사용
    // reduceRight: 배열의 맨 뒤부터 시작해서 누적하는
}

// Q10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'
{
    const result = students.map((studnet) => studnet.score)
    .filter(score => score >= 50)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order 
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)  // 반대(내림차순)는 b - a
    .join();
    console.log(result);
}