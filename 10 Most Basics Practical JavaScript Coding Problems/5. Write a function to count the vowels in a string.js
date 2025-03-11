// Write a function countVowels(str) that returns the number of vowels.
// Vowels are the letters 'a', 'e', 'i', 'o', and
// 'u'.
function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let char of str){
        if(vowels.includes(char)){
            count++;

        }
    }

return count;

}

console.log(countVowels('Hello World, babumoshai'));