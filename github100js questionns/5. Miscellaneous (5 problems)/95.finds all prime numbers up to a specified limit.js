// Create a function that finds all prime numbers up to a specified limit.

function findPrimes(limit) {
    //function — This is how we create a reusable block of code.
    // findPrimes — The name of the function, which tells us what it does (finds prime numbers).
    // limit — A parameter — a value we give to the function when calling it. It tells the function the maximum number to check for primes.
    let primes = [];
    //Create an empty array to store prime numbers
    //let — Used to declare a variable (something that can change).
    //primes — The name of our variable, where we will store all the prime numbers we find.
    //[] — An empty array — like an empty box — that will hold all the prime numbers.
    for (let num = 2; num <= limit; num++) {
        //Loop through all numbers from 2 to the limit
        // for — A loop, meaning "keep repeating the following code until a condition is false."
        //let num = 2 — Start counting from 2 (because 1 is not a prime number).
        //num <= limit — Keep counting until num reaches the limit (the number we passed to the function).
        //num++ — After each loop, increase num by 1 (like counting 2, 3, 4, 5…).
        let isPrime = true;
        //Assume each number is prime until proven otherwise
        //let isPrime = true — We assume every number is prime unless we find a reason it's not.
        //If we later find a factor (something that divides the number evenly), we'll set isPrime = false.

        for (let i = 2; i <= Math.sqrt(num); i++) {
            //Check if the number is divisible by any smaller number    
            //for — Another loop, which will check if num is divisible by any number from 2
            //let i = 2 — Start checking from 2 (the smallest number).
            //i <= Math.sqrt(num) — Keep checking until we reach the square root of num (
            //Math.sqrt(num) — The square root of num (a number that, when multiplied by
            //itself, gives num). We only need to check up to the square root because a
            //larger factor of num would be a multiple of a smaller factor that has already
            //been checked.


            if (num % i === 0) {
                isPrime = false;
                break;
            }
            // : If divisible, mark as not prime
            //             if — A condition — checks if num can be divided evenly by i.
            // num % i — The modulus operator (%) gives the remainder after division.
            // If num % i === 0, it means num is divisible by i — so it's not a prime number.
            // isPrime = false — Mark num as not prime.
            // break — Immediately exit the inner loop because once we know it's not prime, there’s no need to keep checking.
        }
        if (isPrime) {
            primes.push(num);
        }
        // If still prime, add it to the list
        //if (isPrime) — After checking all possible divisors, if isPrime is still true, the number is prime.
        // primes.push(num) — Add num to the primes array.
    }
    return primes;
} //return — Give the final primes array back to whoever called the function.


console.log(findPrimes(100));