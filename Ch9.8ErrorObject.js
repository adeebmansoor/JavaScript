try{
    const prompt = require("prompt-sync")();
    let age = prompt("Enter your age: ");
    age = Number.parseInt(age);
    if(age>150){
        throw new ReferenceError("This is not true");
    }
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("Script is still running");