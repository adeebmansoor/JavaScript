// Synchronous Actions - Actions that are initiate and finish one-by-one. (eg: prompt)
// const prompt = require("prompt-sync")();
// let a = prompt("What is your Name? ");
// let b = prompt("What is your Age? ");
// let c = prompt("What is your favorite Color? ");
// console.log(a + " is " + b + " years old and has " + c + " as his favorite color.");

// Asynchronous Actions - Actions that we initiate now and they finalize later. (eg: setTimeout)
// console.log("Start");
// setTimeout(function(){
//     console.log("Hello, I am good.");
// }, 3000);
// console.log("End");

// Callback Function - it is function passed into another function as an argument, which is then invoked inside the outer function to complete an action.
// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("Loaded script with SRC: " + src);
//         callback(null, src);
//     }
//     script.onerror = function(){
//         console.log("Error Loaded script with SRC: " + src);
//         callback(new Error("Script got some error!"));
//     }
//     document.body.appendChild(script);
// }

// function hello(error, src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert("Hello! " + src);
// }

// function goodmorning(error, src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert("Good Morning! " + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello);