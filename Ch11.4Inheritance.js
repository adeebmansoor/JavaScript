class Animal{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${this.name} is running!`);
    };
    eat(){
        console.log(`${this.name} is eating!`);
    };
    sleep(){
        console.log(`${this.name} is sleeping!`);
    }
}

class monkey extends Animal{
    climbing(){
        console.log(`${this.name} is climbing the tree!`);
    };
}

let monky = new monkey("Monkey");
monky.sleep();
monky.climbing();
monky.run();

class rabbit extends Animal{
    dig(){
        console.log(`${this.name} is digging the hole!`);
    };
}

let rab = new rabbit("Rabbit");
rab.eat();
rab.dig();
rab.sleep();