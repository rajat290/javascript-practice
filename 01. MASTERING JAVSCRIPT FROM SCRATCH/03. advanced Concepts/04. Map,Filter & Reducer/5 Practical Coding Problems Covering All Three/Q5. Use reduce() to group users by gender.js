//  Q5. Use reduce() to group users by gender
const users = [
    { name: 'Alice', age: 17, gender: 'female' },
    { name: 'Bob', age: 20, gender: 'male' },
    { name: 'Charlie', age: 19, gender: 'male' },
    { name: 'David', age: 16, gender: 'male' }
];

const groupUsersByGender = (users) => {
    return users.reduce((acc, user) => {
        if (!acc[user.gender]) {
            acc[user.gender] = [];
        }
        acc[user.gender].push(user);
        return acc;
    }, {});
};

// Example usage:
const groupedUsers = groupUsersByGender(users);
console.log(groupedUsers);