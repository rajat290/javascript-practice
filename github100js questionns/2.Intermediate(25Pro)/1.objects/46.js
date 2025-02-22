// Create an object representing a car with properties like make, model, and year. Add a method to start the engine.

class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    startEngine(){
        console.log("Engine Started");
    
    }
}

let myCar = new Car("Toyota", "Corolla", 2020);
myCar.startEngine();
