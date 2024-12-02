let a = {
    surname : "Mansoor",
    language : "JavaScript",
    // run : () => {
    //     console.log("Self Run");
    // }
}
console.log(a);

let p = {
    run : () => {
        console.log("Run Again");
    }
};

a.__proto__ = p;
a.run();

p.__proto__ = {
    name : "Adeeb"
};
console.log(a.name);