// Q4. Get names of passed students (marks >= 40) using filter + map

function getNamesOfPassedStudents(students) {
    return students
    .filter(student => student .marks >= 40) // Filter students with marks >= 40
    .map(student => student.name); // Map to get their names
}
const students = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 30 },
    { name: 'Charlie', marks: 45 }
];  
const passedStudentNames = getNamesOfPassedStudents(students);
console.log(passedStudentNames); // Output: ['Alice', 'Charlie']
// Explanation: The filter() method creates a new array with students who have marks >= 40, and the map() method extracts their names.
// Flowchart Logic:
// Start → Define students array → Call filter method to get students with marks >= 40 → Call map method to get names → Return names array → End
export { getNamesOfPassedStudents };