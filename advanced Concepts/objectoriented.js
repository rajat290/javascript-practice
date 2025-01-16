let product = {
    company: 'Mango',
    item_name: 'Cotton striped t-shirt',
    price: 861
};


// 1.Groups multiple values together in key-value pairs.
// 2. How to Define: Use {} to enclose properties.
// 3. Example: product {name, price}
// 4. Dot Notation: Use . operator to access values.
// 5. Key Benefit: Organizes related data under a single name.


// Dot Notation: Access properties using . Operator like
// product.price
// 2. Bracket Notation: Useful for properties with special
// characters product[”nick-name"]. Variables can be used to
// access properties
// 3. typeof returns object.
// 4. Values can be added or removed to an object
// 5. Delete Values using delete

let student = {
    rollNo: 41,
    name: 'Rajat',
    course: 'MCA',
};
 
// there us basically two way to access the objects
// thus is a Dot notation way to acces the objects
console.log(student);
console.log(student.rollNo);
console.log(student.name);
console.log(student.course);
// thus is a bracket notation way to acces the objects
console.log(student);
console.log(student[rollNo]);
console.log(student[name]);
console.log(student[course]);

// typeof functionallity tell us the type of code

console.log(typeof student);
// output is object

// we can add or remove the values from the object
delete student.course;
console.log(student);
// output is { rollNo: 41, name: 'Rajat' }

student.age = '25';
console.log(student);
// output is { rollNo: 41, name: 'Rajat', age: '25'