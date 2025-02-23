// Implement a function to sort an array using the quicksort algorithm.

function quicksort(arr){
    if (arr.length <= 1) return arr;
    let pivot = arr[Math.floor(arr.length /2)];
    let left = arr.filter(x => x < pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x > pivot);
    return quicksort(left).concat(middle).concat(quicksort(right));
}