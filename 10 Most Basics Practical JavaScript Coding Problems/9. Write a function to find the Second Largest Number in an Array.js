/*Problem Statement:

Write a function secondLargest(arr) that finds the second largest number.
Flowchart Logic:

Start → Input Array → Sort Descending → Return Second Element.*/

function secondLargest(arr) {
    let sorted = arr.sort((a, b) => b - a);
    return sorted[1];
  }
  
  console.log(secondLargest([1, 5, 2, 9, 7]));
  // Output: 7
  