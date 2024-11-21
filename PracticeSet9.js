// Q.1 WAP to load a JavaScript file in a browser using Promises. Use .then() to display an alert when the load is complete?
// const loadScript = (src) => {
//     return new Promise ((resolve, reject)=> {
//         var script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve(src + " Done Successfully.");
//         }
//     });
// }
// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
// a.then((value) =>{
//     console.log(value);
// });

// Q.2 Write same program from previous question and use async/await syntax?
// const loadScript = async (src) => {
//     return new Promise ((resolve, reject)=> {
//         var script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve(src + " Done Successfully.");
//         }
//     });
// }
// const main1 = async () => {
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
//     console.log(a);
//     console.log(new Date().getMilliseconds());
// }
// main1();

// Q.3 Create a promise which rejects after 3 seconds. Use an async/await to get its value. Use a try & catch to handle its error?
// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("This is not acceptable"));
//         }, 3000);
//     });
// }
// let a = async () => {
//     try{
//         let c = await p();
//         console.log(c);
//     }
//     catch{
//         console.log("This error has been handled.");
//     }
// }
// a();

// Q.4 WAP to using Promise.all() inside an async/await to awaits 3 promises. Compare its result with the case where we await these promises one by one?
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
}
let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 3000);
    });
}
let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    });
}

const run = async () => {
    // console.time("Run");
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    // console.log(a1, a2, a3);
    // console.timeEnd("Run");
    // Runtime: 8.026s

    console.time("Run");
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1 , a2, a3]);
    console.log(a1a2a3);
    console.timeEnd("Run");
    // Runtime: 3.027s
}
run();