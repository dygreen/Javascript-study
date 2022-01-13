// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|'); // 배열을 string으로 변환할 수 있는 유용한 API = join / ()안에는 배열을 구분하는 구분자가 들어감
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 2); // split은 구분자를 꼭 전달해야 함
    console.log(result);
}
// my answer
// const fruits = '🍎, 🥝, 🍌, 🍒';
// const result = fruits.reverse();
// console.log(result);

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); // 배열 자체도 변화시키고, return 값도 변화된 배열 자체를 return함
    console.log(result);
    console.log(array);
}
// my answer
// const array = [1, 2, 3, 4, 5];
// const result = array.reverse();
// console.log(result);

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // slice는 배열에서 원하는 부분만 return해서 받아오고 싶을 때 사용
    console.log(result);
    console.log(array);
}
// my anwer
// ver1.
// const array = [1, 2, 3, 4, 5];
// const newArray = [3, 4, 5];
// console.log(newArray);
// ver2.
// const array = [1, 2, 3, 4, 5];
// array.splice(0, 2);  *splice는 배열 자체를 수정하는 것
// console.log(array);

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
    new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90
{
 const result = students.find((student) => student.score === 90);
 console.log(result);
}

// const result = students.find(function (student) {
//     return student.score === 90;
// });
//  console.log(result);

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}
// my answer
//  const result = students.findIndex((student) => student.enrolled === true);
//  console.log(result);

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}
// mapping = 배열 안에 들어있는 요소 한 가지 한 가지를 다른 것으로 변환해주는 것

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
    // 배열 중에 어떤 것이라도 하나 만족되는 것이 있는지 없는지 검사할 때는 some

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
    // 모든 배열의 조건이 만족돼야 할 때는 every
}

// Q9. compute students' average score
{
    // const result = students.reduce((prev, curr) => {
    //     console.log('----------');
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0);
    // console.log(result);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);

    // reduce는 배열에 있는 모든 요소들의 값을 누적하는, 함께 모아놓을 때 사용
    // curr의 값은 배열 하나하나가 순차적으로 전달됨
    // prev는 return한 값(curr)이 다음에 호출될 때 prev로 순차적으로 연결됨
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90. 66, 88'
{
    const result = students
        .map(student => student.score)
        // 점수가 50점 이상인 배열만 출력하려면
        .filter(score => score >= 50)
        .join();
    console.log(result);
}

// my answer
// const result = students.join(students.score);
// console.log(result);

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join();
        console.log(result);
}
// my answer
//  const result = students
//     .map(student => student.score)
