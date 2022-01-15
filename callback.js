'use strict';

// JavaScript is synchronous(동기적인).
// Execute the code block in order after hoisting.
// hoisting: var, function declaration (함수 선언들이 자동적으로 제일 위로 올라가는 것)
console.log('1'); // 동기
// setTimeout(function() {
//     console.log('2');
// }, 1000);
setTimeout(() => console.log('2'), 1000); // callback // 비동기
console.log('3'); // 동기

// Synchronous callback (동기적인)
function printImmediately(print) {
    print();
};

printImmediately(() => console.log('hello')); // 동기
// 함수의 선언(function)은 hoisting이 되므로, 제일 위로 올려놓음
// 순서: 함수 선언-1출력-2 브라우저에 전달-3출력-function을 호출해 hello 출력-1초 뒤 2 출력

// Asynchronous callback (비동기적인, 예측할 수 없는)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
// class UserStorage {
//     loginUser(id, password, onSuccess, onError) {
//         setTimeout(() => {
//             if (
//                 (id === 'ellie' && password === 'dream') ||
//                 (id === 'coder' && password === 'acadamy')
//               ) {
//                 onSuccess(id);
//               } else {
//                 onError(new Error('not found'));
//               }
//         }, 2000);
//     }
//     getRoles(user, onSuccess, onError) {
//         setTimeout(() => {
//             if (user === 'ellie') {
//                 onSuccess({ name: 'ellie', role: 'admin'});
//             } else {
//                 onError(new Error('no access'));
//             }
//         })
//     }
// };

class UserStorage {
    longinUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
            onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
};
// 1. id, password 2. login 3. roles 4. 사용자의 object(name, role)

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.longinUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                    );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
); 
