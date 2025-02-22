// Write a function to reverse an array without using built-in functions.
function reverseArray(arr){
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return reversed;
}