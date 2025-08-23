// Q3: Handle HTTP errors manually
async function fetchUserData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
            }
            }
        catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        }
    }
// Example usage:
fetchUserData('https://jsonplaceholder.typicode.com/invalid-url');
// Explanation:
// The `fetchUserData` function uses async/await to handle the fetch operation.
// It checks if the response is not OK (status code not in the range 200-299) and throws an error with the status text.
// The catch block handles any errors that occur during the fetch operation, including network errors or HTTP errors.   
