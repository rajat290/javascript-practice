// Write a function removeDuplicates(arr) that removes duplicate elements.

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
  // Output: [1, 2, 3, 4, 5]
  


  //Start → Input Array → Convert to Set → Convert to Array → Output.
