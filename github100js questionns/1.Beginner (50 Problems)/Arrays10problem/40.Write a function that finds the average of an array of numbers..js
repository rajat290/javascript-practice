// Write a function that finds the average of an array of numbers.
function findAverage(arr){
    let sum = arr.reduce((total,num) => total + num, 0);
    return sum/ arr.length;
}