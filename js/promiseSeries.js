// const promiseOne = Promise.resolve(`Promise One resolved`);

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise Two resolved`);
    }, 5000);
});
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise Two resolved`);
    }, 2000);
});

// Promise.all([promiseOne, promiseTwo])
//     .then((res) => {
//         console.log(res);
//     });

Promise.race([promiseOne, promiseTwo])
    .then((res) => {
        console.log(res);
    });