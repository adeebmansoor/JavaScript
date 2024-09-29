// Ch7 Q1 - Create a navbar and change its first element to red?
// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "black";

// Q2 - Create a table without tbody now use "view page source" to check whether it has tbody or not?

// Q3 - Create an element with 3 children. Now change the color of second and last children?
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "black";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "black";

// Q4 - Write a javascript to change the background of all <li> tags to cyan?
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
});