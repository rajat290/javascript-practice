// Question: Write a function greetUser that takes a name and a callback to display a greeting.

// Step-by-step

// Function accepts name + callback

// Executes callback after greeting

function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayBye(){
    console.log("Goodbye!");
}

greetUser("Alice", sayBye);