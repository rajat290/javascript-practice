


function mergeAndRemoeDuplicates(arr1, arr2) {
    return [...new Set ([...arr1, ...arr2])];
}