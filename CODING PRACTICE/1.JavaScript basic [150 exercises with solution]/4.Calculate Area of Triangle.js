const side1 = 5;
const side2 = 6;
const side3 = 7;

const perimeter = (side1 + side2 + side3)/2
const area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter -side3)));
console.log(area);



// /The Math.sqrt() function is used to get the square root of a number. If the value of the number is negative,  Math.sqrt() returns NaN.