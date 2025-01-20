// Throw Error for Non-Integer

// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

// Sample Solution:

// JavaScript Code:

function validateInteger(number)
{
    if (!Number.isInteger( number))
    {
        throw new error
        ('invalid number please input an integer')
    }
    console.log('number is valid: , number');
}

try {
    validateInteger(12);
    validateInteger(12.5);

} catch (error) {
    console.log(error.message);
    
}