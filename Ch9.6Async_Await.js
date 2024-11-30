async function weather() {
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("27 Degree");
        }, 3000);
    });
    let bangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("21 Degree");
        }, 7000);
    });
    // delhiWeather.then((value)=>{
    //     console.log(value);
    // });
    // bangaloreWeather.then((value)=>{
    //     console.log(value);
    // });
    console.log("Fetching Delhi Weather...");
    let delhi = await delhiWeather;
    console.log("Fetched Delhi Weather: " + delhi);
    console.log("Fetching Bangalore Weather...");
    let bangalore = await bangaloreWeather;
    console.log("Fetched Bangalore Weather: " + bangalore);
    return [delhi, bangalore]
};
const middle = async () =>{
    console.log("Hey, I am waiting");
};
const main = async () =>{
    console.log("Welcome to Weather control room!");
    let a = await weather();
    let b = await middle();
};
main();