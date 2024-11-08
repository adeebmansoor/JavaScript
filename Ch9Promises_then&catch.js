let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        // console.log("I am Promise and I am fulfilled.");
        resolve(true);
    }, 5000);
});

let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        // console.log("I am Promise and I am Rejected.");
        reject(new Error("I am an Error"));
    }, 5000);
});

// To get the value;
p1.then((value)=>{
    console.log(value);
});
// To catch the error;
p2.catch((error)=>{
    console.log("Some error has occured.");
});

// Another way;
// p2.then((value)=>{
//     console.log(value);
// }, (error)=>{
//     console.log(error);
// });