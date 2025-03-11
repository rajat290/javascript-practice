// Write a function isPalindrome(str) that returns true if the string is a palindrome.

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome(`madam`));
console.log(isPalindrome(`hello`));