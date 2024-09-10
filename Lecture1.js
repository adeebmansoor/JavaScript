// This is use to print anything.
// console.log(5);

// Data types in JavaScript
// Pre-Defined Data Types:
// Number
// String
// Boolean
// undefined
// null
// BigInt
// Symbol

// Use of keywords var, let, const
// var a = 5;
// var a = 10;
// a = 15;
// console.log(a);
// we can reassign & redeclare values using var keyword

// let b = 'Adeeb';
// let b = 'Mansoor';  This will give error
// b = 'Mansoor';
// console.log(b);
// we can only reassign values using let keyword

// const c = 40;
// const c = 50;
// c = 50;
// console.log(c);
// we can neither reassign nor can redeclare the values using const keyword

// Printing two values together
// 1st Method:
// let firstName = 'Adeeb';
// let lastName = 'Mansoor';
// console.log(firstName+" "+lastName);

// 2nd Method:
let firstName = 'Adeeb';
let lastName = 'Mansoor';
console.log(`${firstName} ${lastName}`);
// we can even add any string values between them and also add spaces between two values
console.log(`My first name is ${firstName}      My last name is ${lastName}`);

// Line break between two Strings
console.log('Adeeb\nMansoor');