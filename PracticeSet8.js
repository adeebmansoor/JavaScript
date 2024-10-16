// Sol 3:
// document.getElementById("google").addEventListener('click', function(){
//     window.location = "https://google.com";
// })
// document.getElementById("facebook").addEventListener('click', function(){
//     window.location = "https://facebook.com";
// })
// document.getElementById("x").addEventListener('click', function(){
//     window.location = "https://twitter.com";
// })

// Sol 4:
// const fetchContent = async (url) =>{
//     con = await fetch(url);
//     let a = await con.json();
//     return a;
// }

// setInterval(async function() {
//     let url = "https://jsonplaceholder.typicode.com/todos/1";
//     console.log(await fetchContent(url));
// }, 5000);

// Sol 5:
setInterval(async function() {
    document.querySelector("#bulb").classList.toggle("bulb");
}, 500);