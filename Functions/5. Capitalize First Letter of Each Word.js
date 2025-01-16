Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox 


// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word to uppercase.
function uppercase(str) {
    // Split the input string into an array of words
    var array1 = str.split(' ');
  
    // Initialize an empty array to store the modified words
    var newarray1 = [];
  
    // Iterate through each word in the array
    for (var x = 0; x < array1.length; x++) {
      // Push the word with its first letter capitalized and the rest of the letters unchanged
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
  
    // Join the modified words into a single string, separated by spaces
    return newarray1.join(' ');
  }
  
  // Log the result of calling uppercase with the input string "the quick brown fox" to the console
  console.log(uppercase("the quick brown fox")); 
  

=======================================


  Explanation:

Assume str = "the quick brown fox";
The split() method is used to split a String object into an array of strings by separating the string into substrings.
console.log(str.split(' '));
Output : ["the", "quick", "brown", "fox"]
First substrings -> "the"
Code to convert first character of the above sting to upper case-> array1[x].charAt(0).toUpperCase()
console.log(array1[x].charAt(0).toUpperCase()); [here x=0]
Output : "T"
Rest part of the string "the" -> array1[x].slice(1)
console.log(array1[0].slice(1));
Output : "he"
Final string :
console.log(array1[0].charAt(0).toUpperCase()+array1[0].slice(1));
Output : "The"
Now insert the above string into another array :
newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));

Used functions :
The charAt() method is used to get the specified character from a string.
Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.
The toUpperCase() method is used to convert the string value to uppercase.
The slice() method returns a shallow copy of a portion of an array into a new array object.
The push() method is used to add one or more elements to the end of an array and returns the new length of the array.

After completing the for loop return the final string :
return newarray1.join(' ');
The join() method joins all elements of an array into a string.