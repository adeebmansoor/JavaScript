// Ch6 Q1 - WAP using prompt function to take an input of age as a value from user and use alert to tell him if he can drive?
// let age = prompt("Enter your age: ");
// age = Number.parseInt(age);
// if(age<18){
//     alert("No you cannot drive!");
// }
// else if(age>18){
//     alert("Yes you can drive!");
// }

// Q2 - In Q1 use confirm to ask if the user want to see the prompt again?
// do{
//     let age = prompt("Enter your age: ");
// age = Number.parseInt(age);
// if(age<18){
//     alert("No you cannot drive!");
// }
// else if(age>=18){
//     alert("Yes you can drive!");
// }
// }while(confirm("Want to see the prompt again?"));

// Q3 - In Q2 use console.error if age entered is negative?
// do{
//     let age = prompt("Enter your age: ");
// age = Number.parseInt(age);
// if(age<0){
//     console.error("Enter a valid age!");
//     break;
// }
// else if(age<18){
//     alert("No you cannot drive!");
// }
// else if(age>=18){
//     alert("Yes you can drive!");
// }
// }while(confirm("Want to see the prompt again?"));

// Q4 - WAP to change a url to google.com if the user enters a number greater than 4?
// let num = prompt("Enter a Number: ");
// num = Number.parseInt(num);
// if(num > 4){
//     location.href = "https://google.com";
// }

// Q5 - Change the background of the page as per the choice of the user?
// Run this code in browser...
document.body.style.background = prompt("Enter the color: ");