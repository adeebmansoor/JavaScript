let f = () =>{
    try{
        let a = 0;
        // console.log(program);
        return;
    }
    catch(error){
        console.log("This is an Error");
        console.log(p);
    }
    // Use of finally:
    // Close the file
    // Exit the Loop
    // Write to the Log File
    finally{
        console.log("I will Run");
    }
}
f();

console.log("Program is End");