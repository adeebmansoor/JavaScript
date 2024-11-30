let marks_class12 = [87, 45, 81, 94, 66 , 58, 11, 23, 18];

// 1. for loop
// for(let i=0; i<marks_class12.length; i++){
//     console.log(marks_class12[i]);
// }

// 2. for-each loop (square of elements)
// marks_class12.forEach((Element)=>{
//     console.log(Element*Element);
// })

// 3. for-of loop
// for(i of marks_class12){
//     console.log(i);
// }

// 4. for-in loop
// for(j in marks_class12){
//     console.log(marks_class12[j]);
// }

// 5. Array.from()   used to create an array from any other object
// let a = "Adeeb Mansoor";
// let arr = Array.from(a);
// console.log(arr);

// 6. map(value, index, array)   creates a new array by performing some functions on each elements of the source array, this function returns an array
// let internalMarks = 10;
// let arr = marks_class12.map((value)=>{
//     return value + internalMarks;
// })
// console.log(arr);
// Difference between for-each loop and map() is;
// for-each loop performs operation on the values of an existing array & map() creates a new array while performing operation on values.

// 7. filter()    it filters an array with values that passes some condition, this function returns an array
let passingMarks = marks_class12.filter((values)=>{
    return (values>33);
});
console.log(passingMarks);

// 8. reduce()    it reduces an array to a single value & returns it
let marks = [87, 78, 90, 92, 74];
let totalMarks = marks.reduce((a, b)=>{
    return a + b;
});
console.log(totalMarks);