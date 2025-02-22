console.log("Hello world");

// 2.Print the result of adding two numbers to the console.
let a = 5;
let b = 1
console.log(a + b);

// 3.Print your name to the console in uppercase

let name = "Rajat Singh"
console.log(name.toUpperCase());

// 4. Print all even numbers between 1 and 20 to the console.
for (let i = 1; i <= 200; i++) {
    //for — This is a loop that repeats a block of code.
    // let i = 1 — Start with i = 1. (We begin counting from 1.)
    // i <= 20 — Keep going as long as i is less than or equal to 20.
    // i++ — Increase i by 1 after each loop. (So the values will be 1, 2, 3, …, 20.)
    if (i % 2 === 0) {
    // if (i % 2 == 0) {
    //     if — A condition that checks something.
    //     i % 2 — The modulus operator (%) finds the remainder when i is divided by 2.
    //     i % 2 === 0 — Means "is i divisible by 2 without any remainder?"
    //     If true → i is even (like 2, 4, 6…).

    console.log(i);
    }
}

// 5. Log an object with properties name, age, and city to the consol
let person = {Name: "Rajat" , Age: 25, city: "New Delhi"};
console.log(person);
