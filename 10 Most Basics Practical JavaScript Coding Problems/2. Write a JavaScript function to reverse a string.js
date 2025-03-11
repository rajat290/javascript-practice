
// Write a function reverseString(str) that returns the reversed string.
// Example: reverseString("Hello") returns "olleH".

function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString(`Hello`));
console.log(reverseString(`Rajat`));


// Flowchart Logic:
// Start → Input String → Split String → Reverse → Join → Output.
