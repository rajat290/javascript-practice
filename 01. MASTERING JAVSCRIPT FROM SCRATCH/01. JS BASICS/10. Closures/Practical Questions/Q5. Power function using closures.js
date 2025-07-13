function power(base) {
    return function (exponent) {
        return Math.pow(base, exponent);                    
    };
}
// Example usage:
const powerOfTwo = power(2);
console.log(powerOfTwo(3)); // Output: 8
console.log(powerOfTwo(4)); // Output: 16
// Explanation:
// power function returns another function that calculates base raised to exponent      
// Each call to the returned function uses the base from the closure
// This allows creating power functions for different bases
// Example: power(2) creates a function that calculates powers of 2