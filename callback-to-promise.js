// Callback Hell example
// 1. 
// class UserStorage {
//     longinUser(id, password, onSuccess, onError) {
//         setTimeout(() => {
//             if (
//                 (id === 'ellie' && password === 'dream') ||
//                 (id === 'coder' && password === 'academy')
//             ) {
//             onSuccess(id);
//             } else {
//                 onError(new Error('not found'));
//             }
//         }, 2000);
//     }
//     getRoles(user, onSuccess, onError) {
//         setTimeout(() => {
//             if (user === 'ellie') {
//                 onSuccess({name: 'ellie', role: 'admin'});
//             } else {
//                 onError(new Error('no access'));
//             }
//         }, 1000);
//     }
// };

// > promise를 이용하는 것으로 변경
// *practice
// const longinUser = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (
//             (id === 'ellie' && password === 'dream') ||
//             (id === 'coder' && password === 'academy')
//         ) {
//         resolve(id);
//         } else {
//             reject(new Error('not found'));
//         }
//     }, 2000);
// });

// *answer
class UserStorage {
    longinUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                  resolve(id);
                } else {
                  reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
};


// 2.
// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage.longinUser(
//     id,
//     password,
//     user => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 alert(
//                     `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//                     );
//             },
//             error => {
//                 console.log(error);
//             }
//         );
//     },
//     error => {
//         console.log(error);
//     }
// ); 

// > promise chaining으로 변경
// *answer
// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage
//  .longinUser(id, password)
//  .then(userStorage.getRoles)
//  .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
//  .catch(console.log);

// *async와 await을 이용해 더 간단하게
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
async function checkUser() {
    try {
        const userId = await
        userStorage.longinUser(id, password);
        const user = await
        userStorage.getRoles(userId);
        alert(`hello ${user.name}, you have a ${user.role} role`);
    } catch(error) {
        console.log(error);
    }
}
checkUser();
