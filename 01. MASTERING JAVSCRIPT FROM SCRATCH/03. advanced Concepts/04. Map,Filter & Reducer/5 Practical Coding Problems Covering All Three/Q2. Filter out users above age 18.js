//  Q2. Filter out users above age 18
const users = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 19 },
    { name: 'David', age: 16 }
];
const filterUsers = (users) => {
    return users.filter (user => user.age <= 18)
;
};

// Example usage:
const filteredUsers = filterUsers(users);
console.log(filteredUsers); // Output: [{ name: 'Alice', age: 17 }, { name: 'David', age: 16 }]