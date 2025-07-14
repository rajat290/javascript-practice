// Use async/await to get data from: https://jsonplaceholder.typicode.com/users


async function fetchUSerNames() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Newtwork response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        for (const user of data) {
            console.log(user.name);
            console.log(user.username);
            console.log(user.email);
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        }
    }
fetchUSerNames(); // Call the function to fetch and log user names