// Q5: Chain multiple fetch calls (get users → get first user’s posts)
// Get users list → pick first user → get their posts

// API: https://jsonplaceholder.typicode.com/users
async function fetchUsersAndPosts() {
    try {
        // Fetch users
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!usersResponse.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await usersResponse.json();
        // Pick the first user
        const firstUser = users[0];
        console.log('First User:', firstUser.name);

        // Fetch posts for the first user
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
        if (!postsResponse.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await postsResponse.json();
        console.log('First User\'s Posts:', posts);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
// Example usage:
fetchUsersAndPosts();
// Explanation:
// The `fetchUsersAndPosts` function first fetches the list of users from the API.
// It then picks the first user from the list and logs their name.