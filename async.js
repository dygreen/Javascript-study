// async & await
// clear style of using promise 

// 1. async
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs...
//     resolve('ellie');
//   });
// }

async function fetchUser() {
      // do network request in 10 secs...
      return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '๐';
}

async function getBanana() {
    await delay(1000);
    return '๐';
}
// promise๋ก ํํํ์๋ฉด,
// function getBanana() {
//     return delay(3000)
//     .then(() => '๐');
// }


async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

// promise๋ก ํํํ์๋ฉด,
// function pickFruits() {
//     return getApple()
//      .then(apple => {
//          return getBanana()
//           .then(banana => `${apple} + ${banana}`);
//      });
// }

pickFruits().then(console.log);


async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

// 3. useful APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {    // ๋จผ์  ๋ฐ์ง๋ ์ฒซ ๋ฒ์งธ ๊ณผ์ผ๋ง ๋ฐ์์ค๊ณ  ์ถ์ ๋
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);