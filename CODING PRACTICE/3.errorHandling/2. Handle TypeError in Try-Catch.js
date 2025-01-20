// Handle TypeError in Try-Catch

// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

// Sample Solution:

// JavaScript Code:

try {
    const undefinedObject = undefined;
    console.log(undefinedObject.property);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("TypeError: Cannot read property 'property' of undefined.");
    }
} 

// else
// {
//     {
//         throw error;
//     }
// }


// output
// "Error: Property access to undefined object"
