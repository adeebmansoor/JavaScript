// CH4 - Q1 What will the following print?
console.log("adee\"".length);

// Q2 Explore includes, startswith, endswith function of the string?
// 9. includes(a)    This method returns true if the given word is present in the respective string
let sentenceline = "The quick brown fox jumps over the lazy dog";
let word = "fox";
console.log(sentenceline.includes(word));
console.log(`The word ${word} ${sentenceline.includes(word) ? 'is' : 'is not'}` + " present in the sentence");

// 10. startsWith(a)   This method return true if the string is starts with the particular string
console.log(sentenceline.startsWith('The'));

// 11. endsWith(a)   This method return true if the string is ends with the particular string
console.log(sentenceline.endsWith('dog'));

// Q3 Convert a string to lowercase?
console.log(sentenceline.toLowerCase());

// Q4 Extract the amount of the string? "Please give Rs 1000"
let str = "Please give Rs 1000";
let amount = Number.parseInt(str.slice("Please give Rs ".length));
console.log(amount);
console.log(typeof amount);

// Q5 Try to change the 4th character of a string? were you able to do it?
let name = "AdeebMansoor";
name[3] = 'S';
console.log(name);
// No we cannot change the character of the string, because strings are immutable and cannot be changed