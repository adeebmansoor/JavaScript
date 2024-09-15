// CH3 - Q1 WAP to print the marks of the students in the object using for loop?
let marks = {
    Harry : '98',
    Rohan : '56',
    Aakash : '23'
}
// for(i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// Q2 WAP to print the marks of the students in the object using for-in loop?
// for (let b in marks){
//     console.log("Marks of " + b + " are " + marks[b]);
// }

// Q3 WAP to print "Try Again" until the user enters the correct number?
// let cnum = 8;
// const prompt = require("prompt-sync")();
// let num;
// while (true){
//     num = prompt("Enter the number: ");
//     if(num != cnum){
//         console.log("Try Again!");
//     }
//     else if(num == cnum){
//         console.log("You have entered the correct number");
//         break;
//     }
// }

// Q4 Write a function to find the mean of 5 numbers?
// This is arrow function
const mean=(a,b,c,d,e)=>{
return ((a+b+c+d+e)/5);
}
console.log(mean(1,2,3,4,5));

