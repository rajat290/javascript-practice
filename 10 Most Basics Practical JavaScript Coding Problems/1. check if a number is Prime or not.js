// Write a function isPrime(num) that returns true if the number is prime, otherwise false.

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
        } 
    
    }
    return true;
}

console.log(isPrime(27));
console.log(isPrime(10));

// Flowchart Logic:

// Start → Input number → Check if number < 2 → Return false →
// Loop from 2 to √num → If divisible → Return false → Else → Return true.