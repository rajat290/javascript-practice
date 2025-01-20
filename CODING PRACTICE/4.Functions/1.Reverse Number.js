// Write a JavaScript function that reverses a number.
function reverse_a_number(n) {
    // Convert the number to a string to be able to reverse it
    n = n + "";
    return n.split("").reverse().join("");
}

console.log(Number(reverse_a_number(32243)));

// solution number 2

function reverse_a_number(num){
    let reversed_num = 0;
    while (num! == 0) {
        reversed_num = reversed_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
} return reversed_num;

const num = 12345;

console.log("original number: " + num );
 const result = reverse_a_number(num);

 const result = reverse_a_number(num);
 console.log("reversed number: " + result);
