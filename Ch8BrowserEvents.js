// let a = document.getElementsByClassName("container")[0];
// a.onclick = () => {
//     let b = document.getElementsByClassName("container")[0];
//     b.innerHTML = "Hello World!";
// }

let btn = document.getElementById("btn");
let x = function(e){
    alert("Hello World1!");
}
btn.addEventListener('click', x);

let y = function(e){
    alert("Hello World2!");
}
btn.addEventListener('click', y);

let a = prompt("What's your favorite number: ");
if (a == "2"){
    btn.removeEventListener('click', x);
}

// addEventListener() is used to assign multiple handlers to an event.
// For removeEventListener() handler must be the same function object for this to work.