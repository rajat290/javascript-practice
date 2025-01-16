let student = {
    rollNo: 41,
    name: 'Rajat',
    course: 'MCA',
};
 
let num1 = 10;
let num2 = num1;
// let num2 = 10;
let student2 =  student;
console.log(num2);
console.log(student2);
num1 = 15;
delete student.name;
console.log(num2);
console.log(student2);