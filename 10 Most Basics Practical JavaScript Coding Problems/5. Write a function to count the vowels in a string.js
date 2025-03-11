// Write a function countVowels(str) that returns the number of vowels.
// Vowels are the letters 'a', 'e', 'i', 'o', and
// 'u'.
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if ('aeiou'.includes(str[i].toLowerCase())) {
            count++;
        }
    }
}
