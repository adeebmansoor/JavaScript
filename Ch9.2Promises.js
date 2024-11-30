let promise = new Promise(function(resolve, reject) {
    console.log("Hello");
    resolve(56);
});

console.log("Hello One");
setTimeout(function(){
    console.log("Hello in 3 seconds");
}, 3000);

console.log("Hello my name is john");
console.log(promise);