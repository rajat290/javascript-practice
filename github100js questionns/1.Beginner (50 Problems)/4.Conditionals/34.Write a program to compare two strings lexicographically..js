// Write a program to compare two strings lexicographically.
function compareString(str1, str2){
    if (str1 < str2) return `${str1} is less than $ {str2}`;
    else if (str1 > str2) return `${str1} is greater than $ {str2}`;
    return `${str1} is equal to ${str2}`;
}