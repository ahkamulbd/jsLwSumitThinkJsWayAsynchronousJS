/* ====== JS Asynchronous Codes ======= */

// const getVar = () => {
//     setTimeout(function () {
//         console.log(`A function that takes some time`);
//     }, 3000);
// }
// const printSomething = () => {
//     console.log(`Another Function`);
// }
// getVar();
// printSomething();

/* ====== JS Asynchronous Codes fixed with callback function ======= */

const getVarCallback = (callback) => {
    setTimeout(function () {
        console.log(`A function that takes some time`);
        callback();
    }, 3000);
}
const printSomething = () => {
    console.log(`Another Function`);
}
getVarCallback(printSomething);
