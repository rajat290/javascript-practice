// Q3. Use arrow function in setTimeout to preserve this


// setTimeout ke andar arrow function ka use karke this ka correct reference maintain karo — taaki jab 1 second baad message print ho, to actual object ka name dikhaye, na ki undefined ho jaye.


const user = {
    name: 'Rajat',
    age: 25,
    greet:function() {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }, 1000);
    }
};
user.greet(); // Output after 1 second: Hello, my name is Rajat and I am 25 years old.

// Explanation:
// Use arrow function inside setTimeout to preserve this reference.
// Arrow functions do not have their own this, so they use the this value from the enclosing context (user object in this case).
// Flowchart Logic:
// Start → Define user object with name and age → Call greet method → Inside greet, setTimeout with arrow function → Print message using this.name and this.age → End


//  Explanation:
// If we used function() {}, this.name would be undefined

// Arrow function preserves this from the greet() method