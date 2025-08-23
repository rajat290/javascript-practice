//  Q1: Fetch list of users from public API

// API: https://jsonplaceholder.typicode.com/users
// Print all names using fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(user => {
            console.log(user.name);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
// Explanation:
// We use the `fetch` function to send a GET request to the API endpoint.

// Q 2. make it through async/await
async function fetchUsers() {
    try {   
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        for (const user of data) {
            console.log(user.name);
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
// Example usage:
fetchUsers();
// Explanation:
// The `fetchUsers` function uses async/await to handle the asynchronous fetch operation.       