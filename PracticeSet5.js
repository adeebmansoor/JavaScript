// Ch5 - Q1 Crete an array of numbers and take input from user to add numbers to this array?
let arr = [4, 8, 3, 9, 1, 13, 24];
const prompt = require("prompt-sync")();
// let input = prompt("Add number: ");
// input = Number.parseInt(input);
// arr.push(input);
// console.log(arr);

// Q2 Keep adding number to the array in Q1 until 0 is added to the array?
// let input;
// do{
//     input = prompt("Add number: ");
//     input = Number.parseInt(input);
//     arr.push(input);
// }while(input != 0);
// console.log(arr);

// Q3 Filter for numbers divisible by 10 from a given array?
// let arr2 = [12, 50, 55, 110, 64, 78, 140];
// let newarr = arr2.filter((value)=>{
//     return (value%10==0);
// });
// console.log(newarr);

// Q4 Create an array of square of given numbers?
let newarr = arr.map((value)=>{
    return value * value;
});
console.log(newarr);

// Q5 Use reduce function to calculate the factorial of a given number n?
let arr2 = [1, 2, 3, 4, 5];
let fact = arr2.reduce((a, b)=>{
    return a * b;
});
console.log(fact);