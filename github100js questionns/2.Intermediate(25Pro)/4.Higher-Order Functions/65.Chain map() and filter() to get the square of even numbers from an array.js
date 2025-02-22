// Chain map() and filter() to get the square of even numbers from an array.

// let numbers = [1,2,3,4,5];
// let squareOfEvents = numbers.filter(num => num % 2 === 0 ).map(num => num ** console.log(squareOfEvents));


let numbers = [1, 2, 3, 4, 5];
let squaresOfEvens = numbers.filter(num => num % 2 === 0).map(num => num ** 2);
console.log(squaresOfEvens);