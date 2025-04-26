let marks = 118;
if (marks >= 90) {
    console.log('Grade: A');
} else if (marks > 75) {
    console.log("Grade: B");
} else if (marks > 50 ) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}



// Logic:

// Pehle check karega >90 → nahi hua

// Phir >75 → nahi hua

// Phir >50 → haan! Grade C

// Nahi to "Fail"


// 🎯 Interview Tip:
// if sirf pehli true condition pe ruk jaata hai, neeche nahi jaata.

// Left se right evaluation hoti hai.

