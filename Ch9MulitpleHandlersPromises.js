let p1 = new Promise((resolve, reject)=>{
    alert("Hey I am not resolved.");
    setTimeout(()=>{
        resolve(1);
    }, 3000);
});
p1.then(()=>{
    console.log("Congratulations this promise is now resolved.");
});
p1.then(()=>{
    console.log("Hurray!");
});