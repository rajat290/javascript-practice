// Write a function to add two numbers and return the result
function add(a, b) {
    return a + b;
}

//7.Create a function to calculate the area of a rectangle given its width and height.
function calculate(width, height) {
    return width * height;
}

// 8.Write a function that takes a string and returns the reversed version.
function reverseString(str) {
    return str.split("").reverse().join('');
}

// 9.Write a function that calculates the factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
}
// 10. write a function that generate a random number between a given range 
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
        + min;
}

//11. create a function that checks if number is prime 
function isPrime(n) {
    if (n <= 1) return false; // Numbers <= 1 are not prime

    for (let i = 2; i <= Math.sqrt(n); i++) { // Loop from 2 to √n
        if (n % i === 0) { // If n is divisible by i, it's not prime
            return false;
        }
    }
    return true; // If no divisors were found, it's prime
}
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));

// 12.Write a function to check if a string is a palindrome.
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

//13. Write a function that finds the maximum of two numbers.
// let a = 11;
// let b = 29;
function max(a, b)
 {
    if (a > b) {
        return a;
    }
}
// console.log(max(a, b));

// 14.Write a function that multiplies two numbers.
function multiply(a, b){
    return a * b;
}

//15. create a function that returns the number of vowels in a string 
function countVowels(str){
    let vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;

    }

    
