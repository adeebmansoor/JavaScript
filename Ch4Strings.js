// Strings in js can be created using double quotes " "
let firstname = "Adeeb";
console.log(firstname);

// Strings in js can also be created using single quotes ' '
let lastname = 'Mansoor';
console.log(lastname);

// Template literals (it uses backtick ` `)
// We can insert variables directly in template literals. This is called "String Interpolation"
let boy1 = "john";
let boy2 = "harry";
// printing john is a friend of harry
let sentence = `${boy1} is a friend of ${boy2}`;
console.log(sentence);
// In template literals we can even use double quote or single quote in strings using backtick
let temp = `It is also possible" in ' template literals`;
console.log(temp);

// Escape sequence characters (\ , \n , \t , \r)
let name = 'Angelo D\' Armano'; 
console.log(name);
let fruit = 'Bana\"na';
console.log(fruit);
let place = 'Bhopal\nMP';   // \n - for new line
console.log(place);
let animal = 'Lion\tTiger';   // \t - for space of a tab
console.log(animal);
let thing = 'on the sea\rshore';  // \r - for carriage return
console.log(thing);

// String Methods:
// 1. length()
let myName = 'Adeeb Mansoor';
console.log(myName.length);

// 2. toUpperCase()
console.log(myName.toUpperCase());

// 3. toLowerCase()
console.log(myName.toLowerCase());

// 4. slice(a,b)
console.log(myName.slice(5,11));

// 5. slice(a)
console.log(myName.slice(4));

// 6. replace(a,b)
console.log(myName.replace('Mansoor', 'Khan'));

// 7. concat(a,b)
let brother = "Moosa";
let brother2 = "Saad";
console.log(myName.concat(brother, brother2));
// We can also concatenate Strings using ' + ' between two Strings
console.log(myName + brother + brother2);

// 8. trim()
let man = "     Josh     "
console.log(man.trim());

// 9. includes(a)    This method returns true if the given word is present in the respective string
let sentenceline = "The quick brown fox jumps over the lazy dog";
let word = "fox";
console.log(sentenceline.includes(word));
console.log(`The word ${word} ${sentenceline.includes(word) ? 'is' : 'is not'}` + " present in the sentence");

// 10. startsWith(a)   This method return true if the string is starts with the particular string
console.log(sentenceline.startsWith('The'));

// 11. endsWith(a)   This method return true if the string is ends with the particular string
console.log(sentenceline.endsWith('dog'));

// Strings are immutable in order to access the character at particular index we use the following syntax
console.log(myName[2]);
console.log(myName[7]);
console.log(myName[10]);
console.log(myName[6]);
console.log(myName[1]);

// Quick Quiz: use a for loop to print a string
// for (let i=0; i<myName.length; i++){
//     console.log(myName[i]);
// }

// using for-in loop
// for (a in myName){
//     console.log(myName[a]);
// }

// using for-of loop
// for (b of myName){
//     console.log(b);
// }