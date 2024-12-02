setInterval(() => {
    let date = new Date();

    let d = date.toLocaleTimeString({
        hour: "2-digit", minute:"2-digit", seconds:"2-digit" });
    time.innerHTML = d;

    let e = date.toLocaleTimeString("en-us", {weekday: "long", year:"numeric", month:"short", day: "numeric"});
    time.innerHTML = e;
}, 1000);