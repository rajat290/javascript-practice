// Write a program to find the most frequent element in an array.
function mostFrequent(arr) {
    let frequency = {};
    let maxCount = 0;
    let mostFrequentElement;

    arr.forEach(element => {
        frequency[element] = (frequency[element] || 0) + 1;
        if (frequency[element] > maxCount) {
            maxCount = frequency[element];
            mostFrequentElement = element;
        }
    });

    return mostFrequentElement;
}