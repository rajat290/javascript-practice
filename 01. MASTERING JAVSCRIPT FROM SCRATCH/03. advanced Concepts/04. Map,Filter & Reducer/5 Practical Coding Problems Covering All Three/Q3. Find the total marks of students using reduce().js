// Q3. Find the total marks of students using reduce()
function findTotalMarks(students) {
    return students.reduce((total, student) => total + student.marks, 0); // Use reduce to sum up the marks of all students
}
const students = [
    { name: 'Alice', marks: 85 },
    { name: 'Bob', marks: 92 },
    { name: 'Charlie', marks: 78 }
];
const totalMarks = findTotalMarks(students);
console.log(totalMarks); // Output: 255
// Explanation: The reduce() function iterates over each student object, accumulating the total marks by adding each student's marks to the running total.  
// Flowchart Logic:
// Start → Define students array → Call reduce method with arrow function → Add student.marks to total → Return final total → End