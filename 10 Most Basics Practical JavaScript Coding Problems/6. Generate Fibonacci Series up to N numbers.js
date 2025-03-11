//Write a function fibonacci(n) that generates Fibonacci series.
function fibonacci(n){
    let series = [0,1];
    for(let i = 2; i < n; i++){
        series.push(series[i-1] + series[i-2]);
    }
    
    return series;
  }
  
  console.log(fibonacci(7));
  // Output: [0, 1, 1, 2, 3, 5, 8]

//   Flowchart Logic:

// Start → Input N → Generate Series → Output.

/*
Code Breakdown
Function Signature

function fibonacci(n) {
The function takes one argument n, which represents the number of terms in the Fibonacci series.
Initializing the Series

let series = [0, 1];
The Fibonacci series starts with 0 and 1, so we initialize the series array with these two values.
Generating the Series

for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
}
We use a for loop to generate the remaining terms in the series.
The loop starts from i = 2 because we already have the first two terms (0 and 1) in the series array.
Inside the loop, we calculate the next term by adding the last two terms (series[i - 1] and series[i - 2]) and push it to the series array.
The loop continues until i reaches n, which means we have generated n terms in the series.
Returning the Series

return series;
Finally, the function returns the generated Fibonacci series.
s
console.log(fibonacci(7));
In this example, we call the fibonacci function with n = 7 and log the result to the console.
The output will be the Fibonacci series with 7 terms: [0, 1, 1, 2, 3, 5, 8].
Time Complexity
The time complexity of this function is O(n), where n is the number of terms in the series. This is because we use a single loop to generate the series, and the number of iterations is directly proportional to the input size.

*/