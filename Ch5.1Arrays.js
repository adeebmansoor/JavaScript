// Initializing and storing values in array
let marks_class12 = [91, 89, 67, 46, 90 , 82, "Not Present", 78, null];
// Printing the whole array
console.log(marks_class12);
// Changing the values of an array
marks_class12[0] = 96;
marks_class12[8] = 54;
// Adding new values to the array
marks_class12[9] = 97;
marks_class12[10] = 72;
// Printing the modified array
console.log(marks_class12);

// IMP NOTE: Arrays are mutable unlike Strings, hence it can be changed

// Printing the values of array using for loop
// console.log("The Marks of Class 12th students are: ");
// for (let i=0; i<marks_class12.length; i++){
//     console.log(marks_class12[i]);
// }

// Array Methods:
// 1. toString()    converts an array into a string, elements separated with comma
console.log(marks_class12.toString(), typeof marks_class12.toString());

// 2. join(a)    joins all the elements with a separator
console.log(marks_class12.join('_'), typeof marks_class12.join('_'));

// 3. pop()    returns the last element of an array, it updates the original array
console.log(marks_class12 , marks_class12.pop());

// 4. push(a)   adds new element to the end of an array, it updates the original array
marks_class12.push(99);
console.log(marks_class12);

// 5. shift()   returns the first element of the array, it updates the original array
console.log(marks_class12.shift() , marks_class12);

// 6. unshift()    adds new element to the front of an array, it updates the original array
marks_class12.unshift(32);
console.log(marks_class12);

// 7. delete       delete is an operator like typeof not a method, it deletes a particular index value of an array
// delete marks_class12[2];
console.log(marks_class12);
// this does not change the length of an array, it just deletes the element and empty the element space

// 8. concat()    it is used to join values of two or more than two arrays in a new array
let new_marks = [54, 67, 23, 80, 77];
let new_more_marks = [75, 64, 84];
// let marks = marks_class12.concat(new_marks, new_more_marks);
// console.log(marks);

// 9. sort()   it is used sort the values of an array in an alphabetical order( not in ascending or descending order), this method modifies an original array
console.log("Alphabetically sorted array" , marks_class12.sort());
// Now for sorting an array in ascending or descending order we have to provide a compare function as an argument
let compare = (a, b) =>{
    return a - b;
}
console.log("Array sorted in ascending order" , marks_class12.sort(compare));
let compare2 = (a, b) =>{
    return b - a;
}
console.log("Array sorted in descending order" , marks_class12.sort(compare2));

// 10. reverse()    it is used for reversing an array
// console.log(marks_class12.reverse());

// 11. splice(a, b, c1, c2, c3)     it is used to add new items to an array, arguments(a- defines the position where to add new items, b- defines how many items should be deleted, c1,c2,c3... - are new items that are to be added)
// splice() method returns the values of the deleted elements
marks_class12.splice(3, 4, 101, 102, 103);
console.log(marks_class12);

// 12. slice()    this slice out a piece of an array, it creates a new array
let sliced_array = marks_class12.slice(4);
console.log(sliced_array);
let sliced_array2 = marks_class12.slice(4, 8);
console.log(sliced_array2);