// Write a function that returns the grade of a student based on their score.
function getGrade(score){
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "c";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";

    }
}

// 2nd way 

function getGrade(score){
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return 'F';
}

