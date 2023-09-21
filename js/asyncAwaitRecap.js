// const aPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (true) {
//             resolve(`It is resolved`)
//         }
//         else {
//             reject(`It is rejected`)
//         }
//     }, 3000);
// })

// const promiseHandling = async () => {
//     const data = await aPromise;
//     console.log(data);
// }

// promiseHandling();


/* ==== With try & catch ===== */

// const aPromiseRejection = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (false) {
//             resolve('It is resolved');
//         }
//         else {
//             reject('It is rejected');
//         }
//     }, 3000);
// });

// const promiseWithErrorHandle = async () => {
//     try {
//         const data = await aPromiseRejection;
//         console.log(data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// promiseWithErrorHandle();


/* ==== Handling More Promises ===== */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve(`Promise 1 resolved`);
        }
        else {
            reject(`Promise 1 rejected`);
        }
    }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve(`Promise 2 resolved`);
        }
        else {
            reject(`Promise 2 rejected`);
        }
    }, 3000);
})

// const handleMultiplePromise = async () => {
//     const data = await Promise.all([promise1, promise2]);
//     console.log(data);
// }
const handleMultiplePromise = async () => {
    const data = await Promise.race([promise1, promise2]);
    console.log(data);
}

handleMultiplePromise();