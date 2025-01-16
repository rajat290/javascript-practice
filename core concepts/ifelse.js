let age = 15;
let isEligibleVoter = age >= 18;
if (isEligibleVoter) {
    console.log("You are eligible voter ")
} else {
    console.log(" you can provide moral support");
}

// use of if else ladder 
let score = 85;
if (score >= 90) {
    console.log("you have scored A+");
} else if (score >= 80) {
    console.log("you have scored A");
} else if (score >= 70) {
    console.log("you have scored B");
} else if (score >= 60) {
    console.log("you have scored C");
} else {
    console.log("you have scored Faaild");
}

// use of nested if-else

let number = 10;
if (number > 0) {
    if (number % 2 ===  0) {
        console.log("number is positive and even");
    } else {
        console.log ("number is positive and odd");

    }
} else if  (number < 0) {
    console.log("number is negative");
} else {
    console.log("number is zero");
}