// Ex1: Guess the Number
var randomNum = Math.floor(Math.random() * 100) + 1;
var prompt = require("prompt-sync")();
var turns = 0;
do{
    var yourNum = prompt("Guess a number: ");
    if(yourNum>0 && yourNum<101){
        if(yourNum == randomNum){
            console.log("Well Done! You've guessed a correct number. The Number is indeed " + randomNum + ".");
        }
        else if(yourNum < randomNum){
            console.log("Guess again, " + yourNum + " is smaller than the number you have to guess.");
        }
        else if(yourNum > randomNum){
            console.log("Guess again, " + yourNum + " is greater than the number you have to guess.");
        }
    }
    else{
        console.log("Guess a valid number between 1 to 100")
    }
    turns ++;
}while(yourNum != randomNum);
let score = 100 - turns;
console.log("\"As you have taken " + turns + " chances. Therefore, your Score is " + score + "\"");