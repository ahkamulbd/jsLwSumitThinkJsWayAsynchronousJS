/* ====== Normal Promise ====== */

// const aPromise = control => {
//     return new Promise((resolve, reject) => {
//         if (control) {
//             resolve();
//         }
//         else {
//             reject();
//         }
//     }, 3000);
// };


// aPromise(false)
//     .then(() => {
//         console.log(`This is a success`);
//     })
//     .catch(() => {
//         console.log(`This is a failure`);
//     })

/* ====== Normal Promise with Data ====== */

// const aPromiseWithData = (control) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (control) {
//                 resolve(`Simple Success Data`);
//             }
//             else {
//                 reject(`Simple Error Data`);
//             }
//         })
//     })
// }

// aPromiseWithData(false)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



/* ====== Handling More Promise ====== */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve(`Promise 1 resolved`);
        }
        else {
            reject(`Promise 1 error`);
        }
    }, 5000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve(`Promise 2 resolved`);
        }
        else {
            reject(`Promise 2 error`);
        }
    }, 3000);
})

Promise.all([promise1, promise2])
    .then((dataArr) => {
        console.log(dataArr);
    })

// Promise.race([promise1, promise2])
//     .then((dataArr) => {
//         console.log(dataArr);
//     })



