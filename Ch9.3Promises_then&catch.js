// let p1 = new Promise((resolve, reject)=>{
//     console.log("Promise is pending");
//     setTimeout(()=>{
//         // console.log("I am Promise and I am fulfilled.");
//         resolve(true);
//     }, 5000);
// });

// let p2 = new Promise((resolve, reject)=>{
//     console.log("Promise is pending");
//     setTimeout(()=>{
//         // console.log("I am Promise and I am Rejected.");
//         reject(new Error("I am an Error"));
//     }, 5000);
// });

// To get the value;
// p1.then((value)=>{
//     console.log(value);
// });
// To catch the error;
// p2.catch((error)=>{
//     console.log("Some error has occured.");
// });

// Another way;
// p2.then((value)=>{
//     console.log(value);
// }, (error)=>{
//     console.log(error);
// });

// Promise Chaining:-
// let p1 = new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log("P1 Resolved after 3 seconds.");
//         resolve(55);
//     }, 3000);
// });
// p1.then((value)=>{
//     console.log(value);
//         var p2 = new Promise ((resolve, reject)=>{
//         setTimeout(()=> {
//             resolve("Promise P2");
//         }, 3000)
//     })
//     return p2;
// }).then((value) =>{
//     console.log("We are not done yet.");
//     return 2;
// }).then((value) =>{
//     console.log("Now we are actually done.");
// });

// LoadScript function using Promises:-
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve("Script loaded successfully");
        };
        script.onerror = () => {
            reject("Failed to load script");
        };
    });
};

const p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
p1.then((value) => {
    console.log(value);
}).catch((error) => {
    console.error(error);
});