// Create a class Person with properties name and age. Add a method to introduce the person.

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`Hi, My name is ${this.name} and i am ${this.age} years`)
    }
}

let person = new Person("Rajat", 23);
person.introduce();
