// Some methods provided by the local storage:-

let key = prompt("What is your key: ");
let value = prompt("What is your value: ");

// 1. setItem(key, value) - it stores key/value pair.
localStorage.setItem(key, value);

// 2. getItem(key) - get the value by key.
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

// 3. removeItem(key) - removes the key with its value.
if (key == "red" || key == "blue"){
    localStorage.removeItem(key);
};

// 4. clear() - clears everything.
if (key == 0){
    localStorage.clear();
};

// 5. length - the number of stored items.
console.log(localStorage.length);

// 6. key(index) - get the key on a given number.
console.log(localStorage.key(0));
console.log(localStorage.key(2));