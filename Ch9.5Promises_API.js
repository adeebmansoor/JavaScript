let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 1");
    }, 8000);
});
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 2");
        // reject(new Error("Error has occured."));
    }, 2000);
});
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 3");
    }, 6000);
});
let p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Value 4");
    }, 4000);
});
// p1.then((value)=>{
//     console.log(value);
// });
// p2.then((value)=>{
//     console.log(value);
// });
// p3.then((value)=>{
//     console.log(value);
// });

//(1.) Promise.all(promises) - waits for all promises to resolve and returns the array of their result. If any one promise is fails, it becomes the error & other results are ignored.
// let promise_all = Promise.all([p1, p2, p3, p4]);
// promise_all.then((value)=>{
//     console.log(value);
// });

//(2.) Promise.allSettled(promises) - waits for all the promises to settle and returns their results as an array of objects with status and values.
// let promise_all = Promise.allSettled([p1, p2, p3, p4]);
// promise_all.then((value)=>{
//     console.log(value);
// });

//(3.) Promise.race(promises) - waits for the first promise to settle and its result/error becomes the outcome.
// let promise_all = Promise.race([p1, p2, p3, p4]);
// promise_all.then((value)=>{
//     console.log(value);
// });

//(4.) Promise.any(promises) - waits for the first promise to fulfill (& not rejected), and its result becomes the outcome. If all the promises are rejected than it throws an aggregate error.
// let promise_all = Promise.any([p1, p2, p3, p4]);
// promise_all.then((value)=>{
//     console.log(value);
// });

//(5.) Promise.resolve(value) - makes a resolved promise with a given value.
// let promise_all = Promise.resolve(6);
// promise_all.then((value)=>{
//     console.log(value);
// });

//(6.) Promise.reject(error) - makes a rejected promise with a given error.
// let promise_all = Promise.reject(new Error("Error"));
// promise_all.then((value)=>{
//     console.log(value);
// });