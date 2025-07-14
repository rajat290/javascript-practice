const numbers = [3,5,7,5,1,4,6,8,2,77,9,10,11,12,13,14,15,16,17,18,19,20];
// Function to find the maximum number in an array
function findMax(arr) {
    let max  = arr[0]; // Initialize max with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]  > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }
    return max;
    }

    console.log(findMax(numbers));