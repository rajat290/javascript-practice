// Call an invalid API and handle error gracefully using try-catch
async function fetchdata(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
// Example usage:
fetchdata('https://jsonplaceholder.typicode.com/invalid-url'); // Call an invalid API to trigger error handling using try-catch
// Explanation:
// The function fetchdata uses async/await to fetch data from a URL.
// If the response is not ok, it throws an error.
// The catch block catches the error and logs it to the console.
// Flowchart Logic:
// Start → Call fetchdata with URL → Try to fetch data → If response is not ok, throw error → Catch error and log it → End  