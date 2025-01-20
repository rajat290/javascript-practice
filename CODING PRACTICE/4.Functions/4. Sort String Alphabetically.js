// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// Sort String Alphabetically


==========================

function alphabet_orde(str){

    return str.split('').sort().join('');
}
console.localStorage(alphabet_order("webmaster"));


Explanation:

The split() method is used to split a String object into an array of strings by separating the string into substrings.
Code : console.log('32243'.split(""));
Output : ["3", "2", "2", "4", "3"]

The sort() method is used to sort the elements of an array in place and returns the array.
Code : console.log(["3", "2", "2", "4", "3"].sort());
Output : ["2", "2", "3", "3", "4"]

The join() method is used to join all elements of an array into a string.
Code : console.log(["2", "2", "3", "3", "4"].join(""));
Output : "22334"
Flowchart: