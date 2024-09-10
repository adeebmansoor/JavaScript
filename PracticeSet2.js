// CH2-Q1
// const prompt=require("prompt-sync")();
// let age = prompt("What's your age?");
// if (age>10 && age<20){
//     console.log("The age lies between 10 & 20");
// }
// else{
//     console.log("The age does not lies between 10 & 20");
// }

// Q2
// const prompt = require("prompt-sync")();
// let age = prompt("Hey whats you age?");
// switch(age) {
//     case '9' :
//     console.log("Your age is 9");
//     break;
//     case '18' :
//     console.log("Your age is 18");
//     break;
//     case '21' :
//     console.log("Your age is 21");
//     break;
//     default :
//     console.log("Your age is 0");
//     break;
// }

// Q3
// const prompt = require("prompt-sync")();
// let a = prompt("Enter the Number: ");
// if (a%2==0 && a%3==0){
//     console.log("Your Number is both divisible by 2 & 3");
// }
// else{
//     console.log("Your Number is not divisible by 2 & 3");
// }

// Q4
// const prompt = require("prompt-sync")();
// let a = prompt("Enter the Number: ");
// if (a%2==0 || a%3==0){
//     console.log("Your Number is either divisible by 2 or 3");
// }
// else{
//     console.log("Your Number is not divisible by 2 or 3");
// }

// Q5
const prompt = require("prompt-sync")();
let age = prompt("Enter your age: ");
let a = age>18? "You can drive" : "You cannot drive";
console.log(a);
