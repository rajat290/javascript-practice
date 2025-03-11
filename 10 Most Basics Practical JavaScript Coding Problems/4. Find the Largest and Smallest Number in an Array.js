// Write a function findMinMax(arr) that returns the minimum and maximum numbers.

function findMinMax(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    console.log(`Min: ${min}, Max: ${max}`);
}

findMinMax([])


// Flowchart Logic:

// Start → Input Array → Loop through → Find Min/Max → Output.