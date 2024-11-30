// Changing card title by Element's Id;
let ctitle = document.getElementById("firstCardTitle");
ctitle.style.color = "green";

// Changing card title by querySelectorAll;
let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color = "green";
ctitles[1].style.color = "maroon";
ctitles[2].style.color = "blue";
console.log(ctitles);

// Changing button background color by querySelector;
let buttonclr = document.querySelector(".this");
buttonclr.style.background = "green";

// Searching element using tag name;
console.log(document.getElementsByTagName("a"));

// Searching element in a particular class using tag name;
console.log(document.querySelector(".navbar").getElementsByTagName("a"));

// Changing card title by Element's class name using ; document.getElementsByClassName()

// Changing card title by Element's name using ; document.getElementsByName()