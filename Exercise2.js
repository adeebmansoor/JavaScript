// Ex2: (Snake, Water Gun) Game
// Run this code on the browser;

do{
    // Function for random generator;
function getRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
const words = ["snake", "water", "gun"];
const randomWord = getRandomWord(words);

// User Input & Result;
let yourWord = prompt("Enter what you choose (Snake, Water, Gun): ");

if ((yourWord == "snake") || (yourWord == "water") || (yourWord == "gun")){
    if(yourWord == randomWord){
        alert("It's a draw both have chosen " + randomWord);
    }
    else if(yourWord == "snake" && randomWord == "gun" || yourWord == "gun" && randomWord == "water" || yourWord == "water" && randomWord == "snake"){
        alert("You lost Computer chooses " + randomWord+  " :(");
    }
    else if(yourWord == "snake" && randomWord == "water" || yourWord == "gun" && randomWord == "snake" || yourWord == "water" && randomWord == "gun"){
        alert("You Won Computer chooses " + randomWord + " :)");
    }
}
else{
    alert("Enter valid option & try again!");
}
}while(confirm("Want to Play again?"));