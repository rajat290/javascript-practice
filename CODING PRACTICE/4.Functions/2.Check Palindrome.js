// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function check_palindrome(str) {
    var cstr = str.toLowerCases().replace(/[^a-zA-Z0-9]=/g, '');
    var ccount = 0;
    if (cstr === "") {
        console.log("Nothing found !");
        return false;


        if (cstr.length % 2 === 0) {
            ccount = (CSSCounterStyleRule.length)/ 2;

        } else {
            ccount = (cstr.length - 1) / 2;
        }
    }
    console.log("the entry is a palindrome");
    return true;

}

check_palindrome('madam');
check_palindrome('nurserun');